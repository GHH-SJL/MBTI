class MBTITest {
    constructor() {
        this.currentQuestion = 0;
        this.progress = 0;
        this.answers = new Map();
        this.questions = window.questions;
        this.initLocalStorage();
    }

    initLocalStorage() {
        const savedProgress = localStorage.getItem('mbtiProgress');
        if (savedProgress) {
            const data = JSON.parse(savedProgress);
            this.currentQuestion = data.currentQuestion;
            this.answers = new Map(data.answers);
            this.updateProgress();
        }
    }

    saveProgress() {
        localStorage.setItem('mbtiProgress', JSON.stringify({
            currentQuestion: this.currentQuestion,
            answers: Array.from(this.answers.entries())
        }));
    }

    updateProgress() {
        this.progress = (this.currentQuestion / this.questions.length) * 100;
        const progressBar = document.querySelector('.progress-bar-fill');
        if (progressBar) {
            progressBar.style.width = `${this.progress}%`;
        }
    }

    submitAnswer(answer) {
        this.answers.set(this.questions[this.currentQuestion].id, answer.type);
        this.saveProgress();
        this.updateProgress();
        this.currentQuestion++;
        this.displayNextQuestion();
    }

    displayNextQuestion() {
        if (this.currentQuestion >= this.questions.length) {
            this.showResults();
            return;
        }

        const question = this.questions[this.currentQuestion];
        const questionDisplay = document.getElementById('question-display');
        const optionsContainer = document.getElementById('options');

        questionDisplay.innerHTML = `
            <h2>问题 ${this.currentQuestion + 1}/${this.questions.length}</h2>
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${this.progress}%"></div>
            </div>
            <p>${question.question}</p>
        `;

        optionsContainer.innerHTML = question.options
            .map(option => `
                <button class="option-button" 
                        onclick="test.submitAnswer({type: '${option.type}'})">
                    ${option.text}
                </button>
            `).join('');
    }

    async showResults() {
        const result = this.calculateResult();
        const personalityType = result.EI + result.SN + result.TF + result.JP;
        const typeInfo = window.personalityDescriptions[personalityType];
        
        // 直接显示结果，不需要支付
        const container = document.getElementById('test-container');
        container.innerHTML = `
            <div class="results-section">
                <h2>你的MBTI类型是：${personalityType} - ${typeInfo.title}</h2>
                <div class="type-description">
                    <p class="description-text">${typeInfo.description}</p>
                    <div class="strengths-weaknesses">
                        <div class="strengths">
                            <h3>优势：</h3>
                            <ul>
                                ${typeInfo.strengths.map(s => `<li>${s}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="weaknesses">
                            <h3>需要注意：</h3>
                            <ul>
                                ${typeInfo.weaknesses.map(w => `<li>${w}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="action-buttons">
                    <button onclick="resetTest()" class="restart-button">
                        重新测试
                    </button>
                    <button onclick="test.shareResults('${personalityType}')" class="share-button">
                        分享结果
                    </button>
                </div>
            </div>
        `;
    }

    calculateResult() {
        const counts = {
            E: 0, I: 0, S: 0, N: 0,
            T: 0, F: 0, J: 0, P: 0
        };

        this.answers.forEach(type => {
            counts[type]++;
        });

        return {
            EI: counts.E >= counts.I ? 'E' : 'I',
            SN: counts.S >= counts.N ? 'S' : 'N',
            TF: counts.T >= counts.F ? 'T' : 'F',
            JP: counts.J >= counts.P ? 'J' : 'P'
        };
    }

    shareResults(type) {
        const typeInfo = window.personalityDescriptions[type];
        const text = `
我刚刚完成了MBTI性格测试！
我的类型是：${type} - ${typeInfo.title}
${typeInfo.description.slice(0, 50)}...

测试地址：${window.location.href}
        `.trim();

        // 创建分享弹窗
        const shareDialog = document.createElement('div');
        shareDialog.className = 'share-dialog';
        shareDialog.innerHTML = `
            <div class="share-content">
                <h3>分享测试结果</h3>
                <div class="share-text">${text.replace(/\n/g, '<br>')}</div>
                <div class="share-buttons">
                    <button onclick="test.copyToClipboard('${text.replace(/'/g, "\\'")}')">
                        复制分享内容
                    </button>
                </div>
                <button class="close-button" onclick="this.parentElement.parentElement.remove()">关闭</button>
            </div>
        `;
        document.body.appendChild(shareDialog);
    }

    // 添加复制到剪贴板的辅助方法
    copyToClipboard(text) {
        // 创建临时输入框
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        
        // 选择并复制文本
        textarea.select();
        try {
            document.execCommand('copy');
            alert('分享链接已复制到剪贴板！');
        } catch (err) {
            console.error('复制失败:', err);
            alert('复制失败，请手动复制链接');
        } finally {
            document.body.removeChild(textarea);
        }
    }

    async checkPayment(orderId, personalityType) {
        try {
            const response = await fetch(`/api/check-payment/${orderId}`);
            const data = await response.json();
            
            if (data.paid) {
                this.displayResults(personalityType);
            } else {
                alert('未检测到支付完成，请确认支付后再试');
            }
        } catch (error) {
            console.error('检查支付状态失败:', error);
            alert('检查支付状态失败，请稍后再试');
        }
    }

    // 显示测试结果
    displayResults(personalityType) {
        const typeInfo = window.personalityDescriptions[personalityType];
        const container = document.getElementById('test-container');
        
        container.innerHTML = `
            <div class="results-section">
                <h2>你的MBTI类型是：${personalityType} - ${typeInfo.title}</h2>
                <div class="type-description">
                    <p class="description-text">${typeInfo.description}</p>
                    <div class="strengths-weaknesses">
                        <div class="strengths">
                            <h3>优势：</h3>
                            <ul>
                                ${typeInfo.strengths.map(s => `<li>${s}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="weaknesses">
                            <h3>需要注意：</h3>
                            <ul>
                                ${typeInfo.weaknesses.map(w => `<li>${w}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="action-buttons">
                    <button onclick="resetTest()" class="restart-button">
                        重新测试
                    </button>
                    <button onclick="test.shareResults('${personalityType}')" class="share-button">
                        分享结果
                    </button>
                </div>
            </div>
        `;
    }
}

// 添加全局重置函数
function resetTest() {
    // 清除本地存储
    localStorage.removeItem('mbtiProgress');
    // 重新加载页面
    location.reload();
}

// 初始化测试
const test = new MBTITest(); 