const questions = [
    // E/I维度 (外向/内向) - 15题
    // 社交倾向
    {
        id: 1,
        question: "参加一个热闹的社交活动后，你通常会：",
        options: [
            { text: "感到精力充沛，想继续社交", type: "E" },
            { text: "需要独处时间来恢复能量", type: "I" }
        ]
    },
    {
        id: 2,
        question: "在团队会议中，你倾向于：",
        options: [
            { text: "积极发言，边说边思考", type: "E" },
            { text: "先思考清楚再发表意见", type: "I" }
        ]
    },
    // 能量来源
    {
        id: 3,
        question: "在压力大的时候，你会选择：",
        options: [
            { text: "和朋友出去散心聊天", type: "E" },
            { text: "独自一人安静放松", type: "I" }
        ]
    },
    // 社交深度
    {
        id: 4,
        question: "你更喜欢的社交方式是：",
        options: [
            { text: "参加大型聚会，认识新朋友", type: "E" },
            { text: "和少数密友深入交谈", type: "I" }
        ]
    },
    // 工作方式
    {
        id: 5,
        question: "在工作中，你更偏好：",
        options: [
            { text: "团队协作，频繁交流", type: "E" },
            { text: "独立完成，适时沟通", type: "I" }
        ]
    },
    // 休闲方式
    {
        id: 6,
        question: "周末你更愿意：",
        options: [
            { text: "参加各种社交活动和聚会", type: "E" },
            { text: "在家享受独处的时光", type: "I" }
        ]
    },
    // 思考方式
    {
        id: 7,
        question: "遇到问题时，你通常会：",
        options: [
            { text: "通过与他人讨论来理清思路", type: "E" },
            { text: "独自思考直到找到答案", type: "I" }
        ]
    },
    // 情感表达
    {
        id: 8,
        question: "对于个人情感，你倾向于：",
        options: [
            { text: "经常与他人分享交流", type: "E" },
            { text: "保持私密，选择性分享", type: "I" }
        ]
    },
    // 学习方式
    {
        id: 9,
        question: "在学习新知识时，你更喜欢：",
        options: [
            { text: "参加小组讨论，互相学习", type: "E" },
            { text: "自学后再与他人交流", type: "I" }
        ]
    },
    // 生活节奏
    {
        id: 10,
        question: "你理想的生活节奏是：",
        options: [
            { text: "充满社交活动和互动", type: "E" },
            { text: "有充足的独处时间", type: "I" }
        ]
    },
    // 沟通方式
    {
        id: 11,
        question: "与他人沟通时，你更习惯：",
        options: [
            { text: "面对面直接交谈", type: "E" },
            { text: "通过文字或邮件交流", type: "I" }
        ]
    },
    // 决策方式
    {
        id: 12,
        question: "做重要决定时，你倾向于：",
        options: [
            { text: "征询多人意见后决定", type: "E" },
            { text: "独自深入思考后决定", type: "I" }
        ]
    },
    // 环境偏好
    {
        id: 13,
        question: "理想的工作环境是：",
        options: [
            { text: "开放式空间，方便交流", type: "E" },
            { text: "安静的独立空间", type: "I" }
        ]
    },
    // 恢复方式
    {
        id: 14,
        question: "在感到疲惫时，你会：",
        options: [
            { text: "找人聊天获取能量", type: "E" },
            { text: "独处一段时间恢复", type: "I" }
        ]
    },
    // 旅行偏好
    {
        id: 15,
        question: "旅行时，你更倾向于：",
        options: [
            { text: "参加团队游，认识新朋友", type: "E" },
            { text: "独自或和密友小规模出行", type: "I" }
        ]
    },

    // S/N维度 (感觉/直觉) - 15题
    {
        id: 16,
        question: "阅读时，你更关注：",
        options: [
            { text: "具体的细节和事实描述", type: "S" },
            { text: "故事背后的深层含义", type: "N" }
        ]
    },
    {
        id: 17,
        question: "在工作项目中，你更擅长：",
        options: [
            { text: "执行已有的成熟方案", type: "S" },
            { text: "提出创新的解决思路", type: "N" }
        ]
    },
    {
        id: 18,
        question: "面对新技术时，你更倾向于：",
        options: [
            { text: "关注其实际用途和具体操作", type: "S" },
            { text: "思考它未来的发展可能", type: "N" }
        ]
    },
    // 问题处理
    {
        id: 19,
        question: "解决问题时，你更信赖：",
        options: [
            { text: "过往经验和实践证明", type: "S" },
            { text: "直觉判断和创新思路", type: "N" }
        ]
    },
    // 关注重点
    {
        id: 20,
        question: "在项目开始时，你更关注：",
        options: [
            { text: "具体的执行步骤和细节", type: "S" },
            { text: "整体目标和发展方向", type: "N" }
        ]
    },
    // 学习偏好
    {
        id: 21,
        question: "学习新事物时，你更喜欢：",
        options: [
            { text: "循序渐进，掌握每个细节", type: "S" },
            { text: "先了解整体框架和联系", type: "N" }
        ]
    },
    // 沟通方式
    {
        id: 22,
        question: "与人交流时，你倾向于：",
        options: [
            { text: "使用具体的例子和细节", type: "S" },
            { text: "使用比喻和抽象概念", type: "N" }
        ]
    },
    // 工作风格
    {
        id: 23,
        question: "在工作中，你更擅长：",
        options: [
            { text: "改进和完善现有系统", type: "S" },
            { text: "设计和发明新的方法", type: "N" }
        ]
    },
    // 决策依据
    {
        id: 24,
        question: "做决定时，你更依赖：",
        options: [
            { text: "实际数据和具体事实", type: "S" },
            { text: "直觉感受和未来趋势", type: "N" }
        ]
    },
    // 观察方式
    {
        id: 25,
        question: "观察周围环境时，你会：",
        options: [
            { text: "注意具体的细节和现象", type: "S" },
            { text: "联想可能的含义和模式", type: "N" }
        ]
    },
    // 兴趣倾向
    {
        id: 26,
        question: "你更感兴趣的是：",
        options: [
            { text: "实际可行的具体方案", type: "S" },
            { text: "充满可能性的新想法", type: "N" }
        ]
    },
    // 记忆方式
    {
        id: 27,
        question: "回忆过去的经历时，你更记得：",
        options: [
            { text: "具体的细节和事实", type: "S" },
            { text: "当时的感受和联想", type: "N" }
        ]
    },
    // 问题分析
    {
        id: 28,
        question: "分析问题时，你更注重：",
        options: [
            { text: "已知的信息和现实条件", type: "S" },
            { text: "潜在的机会和可能性", type: "N" }
        ]
    },
    // 描述方式
    {
        id: 29,
        question: "描述事物时，你倾向于：",
        options: [
            { text: "准确详细的描述现状", type: "S" },
            { text: "发散联想可能的发展", type: "N" }
        ]
    },
    // 时间观念
    {
        id: 30,
        question: "对于时间，你更关注：",
        options: [
            { text: "当下的实际情况", type: "S" },
            { text: "未来的发展可能", type: "N" }
        ]
    },

    // T/F维度 (思维/情感) - 15题
    {
        id: 31,
        question: "在评价他人工作时，你更注重：",
        options: [
            { text: "客观的表现和实际成果", type: "T" },
            { text: "付出的努力和工作态度", type: "F" }
        ]
    },
    {
        id: 32,
        question: "当朋友遇到问题时，你会：",
        options: [
            { text: "分析问题并提供解决方案", type: "T" },
            { text: "首先提供情感支持和理解", type: "F" }
        ]
    },
    {
        id: 33,
        question: "在团队合作中，你更重视：",
        options: [
            { text: "任务的完成效率", type: "T" },
            { text: "团队的和谐氛围", type: "F" }
        ]
    },
    {
        id: 34,
        question: "在处理矛盾时，你更倾向于：",
        options: [
            { text: "基于事实进行理性分析", type: "T" },
            { text: "考虑每个人的感受和立场", type: "F" }
        ]
    },
    {
        id: 35,
        question: "做出选择时，你更看重：",
        options: [
            { text: "选择的逻辑性和合理性", type: "T" },
            { text: "选择对他人的影响", type: "F" }
        ]
    },
    {
        id: 36,
        question: "在给出批评时，你倾向于：",
        options: [
            { text: "直接指出问题所在", type: "T" },
            { text: "先照顾对方的感受", type: "F" }
        ]
    },
    {
        id: 37,
        question: "你认为一个好的决定应该基于：",
        options: [
            { text: "客观的分析和推理", type: "T" },
            { text: "价值观和个人信念", type: "F" }
        ]
    },
    {
        id: 38,
        question: "在处理他人的情绪问题时，你会：",
        options: [
            { text: "提供解决方案和建议", type: "T" },
            { text: "倾听和情感共鸣", type: "F" }
        ]
    },
    {
        id: 39,
        question: "在评价一个提议时，你更关注：",
        options: [
            { text: "方案的可行性和效率", type: "T" },
            { text: "对人际关系的影响", type: "F" }
        ]
    },
    {
        id: 40,
        question: "在工作环境中，你更重视：",
        options: [
            { text: "公平和逻辑的制度", type: "T" },
            { text: "和谐的人际氛围", type: "F" }
        ]
    },
    {
        id: 41,
        question: "面对争论，你通常会：",
        options: [
            { text: "坚持客观事实和逻辑", type: "T" },
            { text: "寻求各方都能接受的方案", type: "F" }
        ]
    },
    {
        id: 42,
        question: "你认为更重要的是：",
        options: [
            { text: "保持客观和公正", type: "T" },
            { text: "维护关系和谐", type: "F" }
        ]
    },
    {
        id: 43,
        question: "在做决定时，你更容易被说服的是：",
        options: [
            { text: "基于数据的理性分析", type: "T" },
            { text: "基于价值观的情感诉求", type: "F" }
        ]
    },
    {
        id: 44,
        question: "你更倾向于：",
        options: [
            { text: "重视真实胜过善意", type: "T" },
            { text: "重视善意胜过真实", type: "F" }
        ]
    },
    {
        id: 45,
        question: "在团队中，你更看重：",
        options: [
            { text: "能力和贡献", type: "T" },
            { text: "合作和包容", type: "F" }
        ]
    },

    // J/P维度 (判断/知觉) - 15题
    {
        id: 46,
        question: "对待截止日期，你通常会：",
        options: [
            { text: "提前完成，避免压力", type: "J" },
            { text: "临近期限才能激发灵感", type: "P" }
        ]
    },
    {
        id: 47,
        question: "你的日程安排通常是：",
        options: [
            { text: "计划详细，按部就班", type: "J" },
            { text: "保持灵活，随机应变", type: "P" }
        ]
    },
    {
        id: 48,
        question: "面对重要决定时，你倾向于：",
        options: [
            { text: "尽快做出决定并执行", type: "J" },
            { text: "保持开放，等待更多信息", type: "P" }
        ]
    },
    {
        id: 49,
        question: "对于计划，你通常：",
        options: [
            { text: "制定详细的执行步骤", type: "J" },
            { text: "定个大方向即可", type: "P" }
        ]
    },
    {
        id: 50,
        question: "你的工作台通常是：",
        options: [
            { text: "整齐有序，物品分类摆放", type: "J" },
            { text: "随性自然，容易找到东西就好", type: "P" }
        ]
    },
    {
        id: 51,
        question: "面对新任务，你倾向于：",
        options: [
            { text: "立即开始，按步就班", type: "J" },
            { text: "等待灵感，临近截止日期再开始", type: "P" }
        ]
    },
    {
        id: 52,
        question: "你更喜欢的工作方式是：",
        options: [
            { text: "有明确的规则和期限", type: "J" },
            { text: "灵活自主，富有弹性", type: "P" }
        ]
    },
    {
        id: 53,
        question: "对于改变，你通常：",
        options: [
            { text: "谨慎评估后再接受", type: "J" },
            { text: "乐于尝试新的可能", type: "P" }
        ]
    },
    {
        id: 54,
        question: "你的生活方式更倾向于：",
        options: [
            { text: "规律有序，计划在先", type: "J" },
            { text: "随性自然，顺其自然", type: "P" }
        ]
    },
    {
        id: 55,
        question: "完成任务时，你更注重：",
        options: [
            { text: "按时完成，符合要求", type: "J" },
            { text: "探索可能，持续改进", type: "P" }
        ]
    },
    {
        id: 56,
        question: "你更喜欢：",
        options: [
            { text: "明确的目标和期限", type: "J" },
            { text: "开放式的探索过程", type: "P" }
        ]
    },
    {
        id: 57,
        question: "在旅行时，你倾向于：",
        options: [
            { text: "制定详细的行程计划", type: "J" },
            { text: "即兴决定去向", type: "P" }
        ]
    },
    {
        id: 58,
        question: "对于规则和制度，你认为：",
        options: [
            { text: "有助于提高效率和质量", type: "J" },
            { text: "应该根据情况灵活调整", type: "P" }
        ]
    },
    {
        id: 59,
        question: "你更喜欢的环境是：",
        options: [
            { text: "井然有序，一切在控制之中", type: "J" },
            { text: "灵活多变，充满新的可能", type: "P" }
        ]
    },
    {
        id: 60,
        question: "对于决定和结论，你倾向于：",
        options: [
            { text: "尽快做出决定并执行", type: "J" },
            { text: "保持开放，等待更多可能", type: "P" }
        ]
    }
];

const personalityDescriptions = {
    'INTJ': {
        title: '建筑师',
        description: '具有创新思维的战略家，擅长制定系统性的理论和计划。他们重视知识，追求完美，具有强大的洞察力和独创性思维。',
        strengths: ['战略性思维', '独立自主', '强大的分析能力', '追求高标准', '开放创新'],
        weaknesses: ['过于完美主义', '可能显得傲慢', '不擅长表达情感', '不耐烦', '过于批判']
    },
    'INTP': {
        title: '逻辑学家',
        description: '富有创造力的发明家，对知识有着永不满足的渴望。他们喜欢寻找规律，发现新的可能性，擅长解决复杂的理论问题。',
        strengths: ['分析能力强', '原创性思维', '求知欲强', '客观理性', '适应力强'],
        weaknesses: ['过于理论化', '容易忽视情感', '不擅长处理日常事务', '可能显得冷漠', '不喜欢规则约束']
    },
    'ENTJ': {
        title: '指挥官',
        description: '天生的领导者，具有魄力和决断力。他们善于制定长期策略和目标，并能高效地组织资源实现目标。',
        strengths: ['天生领导者', '高效执行力', '自信果断', '战略思维', '善于规划'],
        weaknesses: ['可能过于专制', '不耐烦', '过于直接', '情商可能不足', '工作狂倾向']
    },
    'ENTP': {
        title: '辩论家',
        description: '聪明机智的思想家，热衷于智力挑战。他们善于发现新的可能性，喜欢与他人进行思维碰撞。',
        strengths: ['创新能力强', '思维敏捷', '适应力强', '善于辩论', '充满活力'],
        weaknesses: ['不够持久专注', '可能过于好辩', '不擅长执行细节', '容易分心', '可能忽视他人感受']
    },
    'INFJ': {
        title: '提倡者',
        description: '富有同情心的神秘主义者，富有创造力和理想主义色彩。他们安静而坚定，始终致力于实现自己的理想。',
        strengths: ['洞察力强', '创造性思维', '同理心强', '追求完美', '坚持理想'],
        weaknesses: ['过于理想化', '容易过度劳累', '过分追求完美', '难以接受批评', '太过敏感']
    },
    'INFP': {
        title: '调停者',
        description: '诗意的理想主义者，总是寻找善的力量。他们富有同情心，对价值观有着强烈的坚持。',
        strengths: ['富有创造力', '同理心强', '忠于理想', '适应力强', '善于写作'],
        weaknesses: ['过于理想主义', '情绪化', '实践能力较弱', '难以接受现实', '自我要求过高']
    },
    'ENFJ': {
        title: '主人公',
        description: '富有魅力的领导者，能够激发他人潜能。他们热情洋溢，富有同理心，善于帮助他人成长。',
        strengths: ['领导能力强', '善解人意', '富有同理心', '组织能力强', '善于激励他人'],
        weaknesses: ['过分理想主义', '可能过度牺牲自我', '过于敏感', '难以说不', '过度追求和谐']
    },
    'ENFP': {
        title: '探险家',
        description: '热情活泼的自由灵魂，富有创造力和同理心。他们善于发现可能性，热爱生活和新体验。',
        strengths: ['创造力强', '热情洋溢', '适应力强', '善于沟通', '富有同理心'],
        weaknesses: ['注意力分散', '情绪化', '不擅长细节', '难以坚持', '过度理想化']
    },
    'ISTJ': {
        title: '检查者',
        description: '实际可靠的管理者，注重传统和秩序。他们负责任，重视规则，善于组织和执行。',
        strengths: ['可靠负责', '注重细节', '组织能力强', '实践能力强', '遵守承诺'],
        weaknesses: ['过于死板', '不善变通', '可能过于保守', '不善表达情感', '抗拒变化']
    },
    'ISFJ': {
        title: '守护者',
        description: '尽职尽责的守护者，关心他人需求。他们谨慎细心，重视传统，善于照顾他人。',
        strengths: ['可靠负责', '关心他人', '注重细节', '有耐心', '善于合作'],
        weaknesses: ['过分自我牺牲', '难以说不', '抗拒变化', '过度担忧', '不善表达需求']
    },
    'ESTJ': {
        title: '总经理',
        description: '高效务实的管理者，重视传统和秩序。他们善于组织、计划和执行，追求效率和结果。',
        strengths: ['组织能力强', '务实高效', '负责任', '直接坦诚', '决策果断'],
        weaknesses: ['过于武断', '不够灵活', '可能过于专制', '情商可能不足', '不善处理情感问题']
    },
    'ESFJ': {
        title: '执政官',
        description: '热心友善的协调者，重视和谐与合作。他们善于照顾他人，乐于服务，注重传统价值。',
        strengths: ['善解人意', '组织能力强', '可靠负责', '乐于助人', '重视和谐'],
        weaknesses: ['过分在意他人看法', '难以接受批评', '可能过度控制', '不善处理冲突', '过度担忧']
    },
    'ISTP': {
        title: '鉴赏家',
        description: '大胆灵活的实干家，擅长解决具体问题。他们喜欢探索事物运作的原理，追求效率。',
        strengths: ['实践能力强', '灵活应变', '冷静理性', '独立自主', '善于解决问题'],
        weaknesses: ['容易感到无聊', '不善表达情感', '可能显得冷漠', '不喜欢承诺', '可能过于冒险']
    },
    'ISFP': {
        title: '艺术家',
        description: '灵活温和的艺术家，热爱美和自由。他们富有同情心，重视个人价值观，享受当下。',
        strengths: ['艺术感强', '富有同情心', '注重和谐', '适应力强', '忠于自我'],
        weaknesses: ['过分独立', '不善计划', '容易感到压力', '不善于冲突', '难以长期专注']
    },
    'ESTP': {
        title: '企业家',
        description: '灵活机智的实干家，善于解决实际问题。他们富有冒险精神，喜欢刺激和挑战。',
        strengths: ['行动力强', '适应力强', '解决问题能力强', '善于谈判', '务实理性'],
        weaknesses: ['容易冲动', '不善规划', '可能过于冒险', '不够耐心', '可能忽视他人感受']
    },
    'ESFP': {
        title: '表演者',
        description: '热情活泼的表演者，热爱生活和娱乐。他们善于社交，乐观开朗，喜欢成为关注的焦点。',
        strengths: ['热情开朗', '善于社交', '实践能力强', '适应力强', '富有同理心'],
        weaknesses: ['容易分心', '不善规划', '难以长期专注', '过度追求刺激', '可能过于依赖他人']
    }
};

// 改为全局变量
window.questions = questions;
window.personalityDescriptions = personalityDescriptions; 