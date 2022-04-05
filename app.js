const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const question = [
   {
      question: 'Bạn tên gì',
      label1: 'Huy',
      label2: 'Linh',
      value1: 'huy',
      value2: 'linh',
   },
   {
      question: 'Nhà ở đâu',
      label1: 'BTre',
      label2: 'Cần thơ',
      value1: 'bt',
      value2: 'ct',
   },
   {
      question: 'Thú cưng của bạn',
      label1: 'Chó',
      label2: 'Mèo',
      value1: 'cho',
      value2: 'meo',
   },
   {
      question: 'Gia đình có bo nhiêu người',
      label1: '3 người',
      label2: '4 người',
      value1: '3',
      value2: '4',
   },
];
const anws = [
   {
      no: 0,
      anws: 'huy',
   },
   ,
   {
      no: 1,
      anws: 'bt',
   },
   ,
   {
      no: 2,
      anws: 'cho',
   },
   ,
   {
      no: 3,
      anws: '3',
   },
   ,
];

render = (start, end) => {
   question.slice(start, end).forEach((e) => {
      const div = document.createElement('div');
      div.classList.add('question');
      document.body.appendChild(div);
      const element = `
        <h3>${e.question}</h3>
        <label for="">${e.label1}</label>
        <input type="radio" value="${e.value1}" name="gender" class="input"/>
        <label for="">${e.label2}</label>
        <input type="radio" value="${e.value2}" name="gender" class="input"/>
        `;
      div.innerHTML = element;
   });
};

render(0, 1);
let input = $$('.input');
function checkAnws() {
   input.forEach((e) => {
      e.addEventListener('click', () => {
         anws.forEach((d) => {
            if (d.anws === e.value) {
               let question = $('.question');
               question.remove();
               render(d.no + 1, d.no + 2);
               input = $$('.input');
               question = $('.question');
               checkAnws();
               if (!question) {
                  alert('Test complete !!');
               }
            }
         });
      });
   });
}
checkAnws();
