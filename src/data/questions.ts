// MBTI创意题库 TypeScript格式
export type Question = {
  question: string;
  options: {
    text: string;
    dimension: string; // EI/SN/TF/JP
    value: number;     // 1正向/-1反向
  }[];
};

export const questions: Question[] = [
  {
    question: "你喜欢在下雨天做什么？",
    options: [
      { text: "和朋友一起打伞散步", dimension: "EI", value: 1 },
      { text: "戴上耳机一个人听歌", dimension: "EI", value: -1 },
    ],
  },
  {
    question: "如果有一张神秘彩票中奖，你会：",
    options: [
      { text: "立刻分享给身边的人", dimension: "EI", value: 1 },
      { text: "默默保存这个秘密", dimension: "EI", value: -1 },
    ],
  },
  {
    question: "面对一道超难的题，你第一反应是：",
    options: [
      { text: "先大胆尝试，边做边学", dimension: "SN", value: 1 },
      { text: "翻阅资料，查找规律", dimension: "SN", value: -1 },
    ],
  },
  {
    question: "世界末日第二天，你想做的第一件事：",
    options: [
      { text: "发动大家重建家园", dimension: "EI", value: 1 },
      { text: "一个人去探索废墟", dimension: "EI", value: -1 },
    ],
  },
  {
    question: "你的房间更像：",
    options: [
      { text: "有条理的展馆，每样东西有归属", dimension: "JP", value: 1 },
      { text: "艺术空间，灵感随处可见", dimension: "JP", value: -1 },
    ],
  },
  {
    question: "朋友倾诉失落时，你会：",
    options: [
      { text: "找出合理建议帮TA走出来", dimension: "TF", value: 1 },
      { text: "先拥抱安慰，对方感受最重要", dimension: "TF", value: -1 },
    ],
  },
  {
    question: "面对新技术，你更：",
    options: [
      { text: "动手上手做个小项目", dimension: "SN", value: 1 },
      { text: "先去深度思考原理", dimension: "SN", value: -1 },
    ],
  },
  {
    question: "假期出游方式，你会优先：",
    options: [
      { text: "计划好线路，订好酒店再出发", dimension: "JP", value: 1 },
      { text: "即兴决定，走到哪玩到哪", dimension: "JP", value: -1 },
    ],
  },
  {
    question: "收到生日惊喜，你通常：",
    options: [
      { text: "热烈表达感谢，非常兴奋", dimension: "EI", value: 1 },
      { text: "感动但不外露，内心品味", dimension: "EI", value: -1 },
    ],
  },
  {
    question: "哪个更让你有安全感：",
    options: [
      { text: "日程详细且不会突变", dimension: "JP", value: 1 },
      { text: "随性变化，灵感决定一切", dimension: "JP", value: -1 },
    ],
  },
  {
    question: "你做选择题常用的方法是？",
    options: [
      { text: "看细节线索排除法", dimension: "SN", value: 1 },
      { text: "感觉凭直觉选择", dimension: "SN", value: -1 },
    ],
  },
  {
    question: "分小组任务，你通常做：",
    options: [
      { text: "做leader分配&组织工作", dimension: "EI", value: 1 },
      { text: "专心默默把分内事做到极致", dimension: "EI", value: -1 },
    ],
  },
  {
    question: "你对未来更看重什么？",
    options: [
      { text: "现实目标和可操作性", dimension: "SN", value: 1 },
      { text: "梦想和无限可能", dimension: "SN", value: -1 },
    ],
  },
  {
    question: "更容易影响你行动的是：",
    options: [
      { text: "客观原因（时间、资源等）", dimension: "TF", value: 1 },
      { text: "个人想法（心情、兴趣等）", dimension: "TF", value: -1 },
    ],
  },
  {
    question: "遇到分歧，你容易：",
    options: [
      { text: "指出问题，陈述理由", dimension: "TF", value: 1 },
      { text: "尝试照顾大家感受", dimension: "TF", value: -1 },
    ],
  },
  {
    question: "你写作业时喜欢：",
    options: [
      { text: "先做难题后做简单", dimension: "JP", value: 1 },
      { text: "想做就做哪一题", dimension: "JP", value: -1 },
    ],
  },
  {
    question: "更治愈你的场景是？",
    options: [
      { text: "朋友聚会大笑", dimension: "EI", value: 1 },
      { text: "独处时的安静和思考", dimension: "EI", value: -1 },
    ],
  },
  {
    question: "科学实验课时你：",
    options: [
      { text: "先全流程认真跟做一次", dimension: "SN", value: 1 },
      { text: "灵活探索、敢于微创新", dimension: "SN", value: -1 },
    ],
  },
  {
    question: "和不熟的人交流时：",
    options: [
      { text: "主导话题打开气氛", dimension: "EI", value: 1 },
      { text: "倾听/点头为主，慢慢熟悉", dimension: "EI", value: -1 },
    ],
  },
  {
    question: "做决定时更在意：",
    options: [
      { text: "客观利弊和影响", dimension: "TF", value: 1 },
      { text: "人际感受和氛围", dimension: "TF", value: -1 },
    ],
  },
  {
    question: "你喜欢的学习资料？",
    options: [
      { text: "精准条理知识点梳理", dimension: "SN", value: 1 },
      { text: "趣味故事/视频直观启发", dimension: "SN", value: -1 },
    ],
  },
  {
    question: "你更需要哪种假期休息？",
    options: [
      { text: "活动丰富，与人交流", dimension: "EI", value: 1 },
      { text: "安静独处，整理自我", dimension: "EI", value: -1 },
    ],
  },
  {
    question: "完成大项目时你更...？",
    options: [
      { text: "提前列计划表严格推动", dimension: "JP", value: 1 },
      { text: "分阶段，灵活调整", dimension: "JP", value: -1 },
    ],
  },
  {
    question: "你对人际的态度：",
    options: [
      { text: "广交朋友，喜欢社交", dimension: "EI", value: 1 },
      { text: "交心够用，圈子精简", dimension: "EI", value: -1 },
    ],
  },
  {
    question: "碰到复杂系统，你会？",
    options: [
      { text: "归纳总结，便于记忆", dimension: "SN", value: 1 },
      { text: "深挖细节深入探索", dimension: "SN", value: -1 },
    ],
  },
  {
    question: "面对紧急任务：",
    options: [
      { text: "马上行动，边做边想", dimension: "JP", value: 1 },
      { text: "思考整体策略再行动", dimension: "JP", value: -1 },
    ],
  },
  {
    question: "别人请求帮忙，你：",
    options: [
      { text: "先评估能不能、合不合理", dimension: "TF", value: 1 },
      { text: "倾向先安慰和理解", dimension: "TF", value: -1 },
    ],
  },
  {
    question: "要写文档/总结/日记，你更：",
    options: [
      { text: "结构分明，条理清晰", dimension: "JP", value: 1 },
      { text: "随心所欲，想到哪写到哪", dimension: "JP", value: -1 },
    ],
  },
  {
    question: "团队旅游你负责什么？",
    options: [
      { text: "路线规划、预算控制", dimension: "JP", value: 1 },
      { text: "氛围营造、创意活动", dimension: "JP", value: -1 },
    ],
  },
  {
    question: "与其推理小说更偏爱：",
    options: [
      { text: "科普、新闻、纪实类", dimension: "SN", value: 1 },
      { text: "魔幻、未来、幻想类", dimension: "SN", value: -1 },
    ],
  },
];