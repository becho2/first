
const footer = document.querySelector('footer');

let quotes = [
    "지금도 충분히 잘하고 있어요, 걱정하지 말아요.",
    "힘들 땐 잠시 쉬어도 괜찮아요",
    "내가 좋아하는 것을 해야 나 자신이 좋아진다",
    "나는 날마다 더 좋아지고 있다",
    "우리는 존재하는 그대로의 모습 자체로 이미 충분하며, 소원을 이루고 행복을 누리기에 충분한 존재입니다.",
    "다른 사람이 안 들어준다해도 적어도 '나'는 내 말을 잘 들어주자, 내가 나의 좋은 친구가 되자.",
    "오늘은 나 자신에게 재밌는 걸 보여주고, 맛있는 걸 먹여주는 건 어떨까요?",
    "길은 잃어버리는 것이 아니며 헤매는 것은 길을 찾는 것이 아니며 그것이 길임을 알아가는 과정이지요 - 박해선",
    "사실 우리는 우리의 건강과 삶에 대해 우리가 배운 것보다 훨씬 큰 통제력을 갖고 있다. - <치유(HEAL)>, 켈리 누넌 고어스",
    "아무것도 할 수 없는 날이 딱 이틀 있다. 하나는 어제이고, 하나는 내일이다. 오늘이 바로 사랑하고, 믿고, 행하고, 무엇보다도 '살아갈' 바로 그날이다. - 달라이 라마",
    "너무 움츠러들지 마요. 바람이 불면 바람을 맞고, 비가 오면 비를 맞으시구려. - <에보니>, 자야",
    "가장 먼저 떠오른 생각은 이 세상의 어느 누구보다도 자기 자신을 아껴야한다는 사실이었다. 나는 사랑받을 자격이 있다. - <에보니>, 자야",
    "몇날 며칠을 걸어 도착한 곳이 출발한 그곳일 수도 있어. 하지만 명심하길 바라네. 자네는 가야할 곳으로 가고있는 중이라는 것을. - <아만자>, 김보통",
    "심리 치료가 효과가 있는 이유는 어쩌면 따뜻한 관심을 기울여주는 사람의 존재 덕분인지도 모른다. - <싸움의기술>, 정은혜",
    "우리는 가까운 사람들로부터 인정받고 싶고, 이해받고 싶고, 나라는 존재가 긍정되기를 바란다. - <싸움의기술>, 정은혜",
    "그대만은 내 편이 되어줘. 날 응원해 줘. 먼 훗날 내가 울고 있으면 '그러게 그때 왜 내 말을 안 들었냐' 같은 말은 하지 말아줘. - <위대한소원>, 하늘가리기",
    "나의 일생에서 가장 젊은 날은 오늘이며, 내 생애 최고의 순간은 바로 지금이다. - <위대한 일은 없다, 위대한 사랑이 있을 뿐>, 문숙",
    "어떤 사람은 한평생을 흘러간 과거 속에서 살아간다. - <전지적독자시점>, 싱숑",
    "처음 좋아하게 된 걸 계속 좋아하지 않게 되어도, 다음 걸 또 찾으면 돼요. - <피프티피플>, 정세랑",
    "다들 되게 생각 있어 보이고 의미 있는 삶을 살아가는 것 같지만 그렇지 않습니다. - <나도 아직 나를 모른다>, 허지원",
    "삶에 큰 의미가 있을 필요가 없습니다. 살아있는 것 자체가 의미이고, 그것만으로 당신은 다 한겁니다. - <나도 아직 나를 모른다>, 허지원"
]

const countQuotes = quotes.length;

function paintQuotes(random){
    footer.innerText = `${quotes[`${random}`]}`
}

function genRandomQuotes(){
    const randomQuotes = Math.floor(Math.random() * countQuotes);
    return randomQuotes;
}

function init(){
    const randomQuotesNum = genRandomQuotes();
    paintQuotes(randomQuotesNum);
}

init();
