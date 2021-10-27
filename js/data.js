const qnaList = [
  {
      q: '게임을 하려고 합니다.',
      a: [
        { answer: '친구에게 연락해서 같이 한다.', type: ['mouse', 'horse', 'monkey', 'pig', 'tiger', 'snake'] }, //E
        { answer: '혼자한다', type: ['sheep', 'chick', 'dog', 'cow', 'dragon'] }, //I
      ]
  },
  {
      q: '창업을 하려고 합니다.',
      a: [
          { answer: '카페같은 대중적인 분야에서 창업한다.', type: ['sheep', 'chick', 'rabbit', 'snake'] }, //S
        { answer: '자율주행 같은 미래에 뜰 것 같은 분야에서 창업한다', type: ['horse', 'monkey', 'dog', 'pig', 'mouse', 'tiger', 'dragon'] }, //N
      ]
  },
  {
      q: '계단에서 굴러 입원해 있는 친구에게 병문안을 갔습니다.',
      a: [
        { answer: '야 조심 좀 하지', type: ['horse', 'chick', 'dog', 'mouse', 'cow', 'tiger', 'rabbit'] }, //T
        { answer: '괜찮아? 안다쳤어?.', type: ['sheep', 'monkey', 'pig', 'dragon', 'snake'] }, //F
      ]
  },
  {
      q: '약속시간에 늦은 친구가 당신에게 버스가 막혔다고 변명합니다.',
      a: [
        { answer: '야 그럼 일찍와야 될거 아니야? 내가 뭐가돼?', type: ['sheep', 'chick', 'pig', 'tiger', 'dragon'] }, //J
        { answer: '그래 그럴 수도 있지.', type: ['horse', 'monkey', 'dog', 'mouse', 'rabbit', 'snake'] },  //P
      ]
  },
  {
      q: '친구들을 사귀고 싶습니다.',
      a: [
        { answer: '여러 명의 친구를 두루두루 사귄다.', type: ['mouse', 'horse', 'monkey', 'pig', 'tiger', 'snake'] }, //E
        { answer: '적은 친구들과 깊게 사귄다.', type: ['sheep', 'chick', 'dog', 'cow', 'dragon'] }, //I
      ]
  },
  {
      q: '독서실에 가려는 당신을 친구들이 부릅니다.',
      a: [
        { answer: '친구들을 따라간다.', type: ['sheep', 'chick', 'pig', 'tiger', 'dragon'] }, //J
        { answer: '독서실에 간다', type: ['horse', 'monkey', 'dog', 'mouse', 'rabbit', 'snake'] }, //P
      ]
  },
  {
      q: '수련회에 갔습니다.',
      a: [
        { answer: '방의 가운데에 있는다.', type: ['mouse', 'horse', 'monkey', 'pig', 'tiger', 'snake'] }, //E
        { answer: '방의 구석자리에 있는다.', type: ['sheep', 'chick', 'dog', 'cow', 'dragon'] }, //I
      ]
    },
    {
      q: '시험이 2주 남았습니다',
      a: [
        { answer: '계획표를 세우고 공부한다.', type: ['sheep', 'chick', 'pig', 'tiger', 'dragon'] }, //J
        { answer: '손에 잡히는 대로 공부한다.', type: ['horse', 'monkey', 'dog', 'mouse', 'rabbit', 'snake'] },  //P
      ]
    },
    {
      q: '낯선 사람들과 있는 자리에서',
      a: [
        { answer: '먼저 말을 걸면서 분위기를 띄운다.', type: ['mouse', 'horse', 'monkey', 'pig', 'tiger', 'snake']}, //E
        { answer: '말을 걸어올 때까지 기다리고 본다.', type: ['sheep', 'chick', 'dog', 'cow', 'dragon']}, //I
      ]
  },
  {
      q: '맛있어 보이는 식당을 발견한 나는',
      a: [
        { answer: '간판에서 맛집의 기운이 느껴진다 맛집 각이야.', type: ['horse', 'monkey', 'dog', 'pig', 'mouse', 'tiger', 'dragon']}, //N
        { answer: '유명하고 리뷰도 많으니까 맛은 보장되어 있겠군.', type: ['sheep', 'chick', 'rabbit', 'snake']}, //S
      ]
  },
  {
      q: '해외여행 계획을 짜게 된 나는',
      a: [
        { answer: '할 거면 제대로! 일별로 세부 일정을 정리한다.', type: ['sheep', 'chick', 'pig', 'tiger', 'dragon']}, //J
        { answer: '비행기 표만 끊어두고 계획의 80% 끝난다고 생각한다.', type: ['horse', 'monkey', 'dog', 'mouse', 'rabbit', 'snake']}, //P
      ]
  },
  {
      q: '친구와 다투었을 때 나는',
      a: [
        { answer: '나 진짜 너무 화났어 라고 말한다.', type: ['horse', 'chick', 'dog', 'mouse', 'cow', 'tiger', 'rabbit']}, //T
        { answer: '어떤 점은 꼭 고쳐줬으면 좋겠어 라고 말한다.', type: ['sheep', 'monkey', 'pig', 'dragon', 'snake']}, //F
      ]
  },
]


const infoList = [
  {
    name: '여백 <오버워치>',
    desc: '여백'
  },
  {
    name: '여백 <스타듀벨리>',
    desc: '여백'
  },
  {
    name: '여백 <시티즈스카이라인>',
    desc: '여백'
  },
  {
    name: '여백 <바바이스유>',
    desc: '여백'
  },
  {
    name: '여백 <원아워원라이프>',
    desc: '여백'
  },
  {
    name: '여백 <고로고아>',
    desc: '여백'
  },
  {
    name: '여백 <폴리브릿지>',
    desc: '여백'
  },
  {
    name: '여백 <휴먼리소스머신>',
    desc: '여백'
  },
  {
    name: '여백 <리그오브레전드>',
    desc: '여백'
  },
  {
    name: '여백 <아이작>',
    desc: '여백'
  },
  {
    name: '여백 <다크소울>',
    desc: '여백'
  },
  {
    name: '여백 <스타크래프트>',
    desc: '여백'
  },
]
