import "./App.css"

export default function App() {
  const months = ["Հունվար",
    "Փետրվար",
    "Մարտ",
    "Ապրիլ",
    "մայիս",
    "Հունիս",
    "հուլիս",
    "Օգոստոս",
    "սեպտեմբեր",
    "Հոկտեմբեր",
    "Նոյեմբեր",
    "Դեկտեմբեր"
  ];
  const weekdays = [
    "Կիրակի",
    "Երկուշաբթի",
    "Երեքշաբթի",
    "Չորեքշաբթի",
    "Հինգշաբթի",
    "Ուրբաթ",
    "Շաբաթ",
  ];
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');

  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  const futureDate = new Date(tempYear, tempMonth, tempDay + 1, 12, 0, 0);

  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth();
  month = months[month];
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  giveaway.textContent = `Արթուրի ու Տիրուհու Հարսանիք Սկսվում է  ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

  const futureTime = futureDate.getTime();
  function getRemaindingTime() {
    const today = new Date().getTime();

    const t = futureTime - today;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }

    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });

    if (t < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">կներեք, զվարճանքը մոտեցել է ավարտին!</h4>`;
    }
  }


  let countdown = setInterval(getRemaindingTime, 1000);
  getRemaindingTime();

  return (
  <div>
        <section className="section-center">
          <article className="gift-img">
            <img src="" alt="gift" />
          </article>
          <article className="gift-info">
            <h3>Արթուրի ու Տիրուհու Հարսանիք</h3>
            <h4 className="giveaway">
              Արթուրի ու Տիրուհու Հարսանիք Սկսվում է Ապրիլի 29-ին
            </h4>
            <p>
              Երբ ձեզ համար հարազատ և հարազատ մեկը մեկ տարով մեծանա, դուք կցանկանաք անել ամեն ինչ, որպեսզի նրանց օրն ավելի հիշարժան լինի: Անկախ նրանից, թե դուք ծննդյան խնջույք եք կազմակերպում, կոկտեյլ խնջույք կամ ընթրիք եք պլանավորում պատվավոր անձի սիրելի ռեստորանում, դուք կցանկանաք պատվավոր հյուրին շնորհավորել ծննդյան բացիկ: Այս տարի ասեք «Ծնունդդ շնորհավոր»: հատուկ բացիկով և մի քանի բառով, որոնք ոչ ոք չի մոռանա: Անկախ նրանից, թե դուք ողջույն եք փնտրում, որպեսզի ստիպեք ինչ-որ մեկին ծիծաղել, թե սիրտ տաքացնող արցունքաբեր, ծննդյան այս մեջբերումները հիանալի վայր են սկսելու համար: Գտեք մեջբերում կամ հաղորդագրություն, որն աշխատում է ձեզ համար և հարմարեցրեք համապատասխանությանը:
              Երբ դուք նստում եք ձեր առջև՝ ունենալով դատարկ ծննդյան բացիկ, մի զարմացեք, եթե թվում է, թե չեք կարողանում գրիչը թղթին դնել: Մեզանից շատերը գրողի արգելափակման դեպք են ունենում, երբ նստում ենք ծննդյան բացիկ շնորհավորելու, հատկապես այն մարդկանց, ում ամենաշատն ենք սիրում: Իհարկե, ծննդյան պատվավոր անձը գիտի, թե որքան եք սիրում և գնահատում նրան, բայց ցավալի չէ հիշեցնել նրան իրենց օրը: Ուղեկցեք ձեր ծննդյան մաղթանքները գեղեցիկ անհատականացված ծննդյան բացիկներում, կամ գուցե ծննդյան խնամքի փաթեթներում: Դուք նույնիսկ կարող եք փաթեթավորել ծննդյան աղջկա կամ տղայի ձեր բոլոր սիրած նկարները տոնական ֆոտոգրքի կամ ծննդյան օրացույցի մեջ՝ ամբողջ տարվա ընթացքում ձեր սիրո հիշեցման համար:
              Հետևյալ ծննդյան մեջբերումները կդարձնեն ձեր բացիկների ամենագեղեցիկ հավելումը ընտանիքի և ընկերների համար: Անցնել ցանկացած համապատասխան բաժին ստորև.
              (Մանվել Եղիազարյան)
            </p>
            <div className="deadline">
              <div className="deadline-format">
                <div>
                  <h4 className="days">34</h4>
                  <span>Օրեր</span>
                </div>
              </div>
              <div className="deadline-format">
                <div>
                  <h4 className="hours">34</h4>
                  <span>ժամեր</span>
                </div>
              </div>
              <div className="deadline-format">
                <div>
                  <h4 className="minutes">34</h4>
                  <span>րոպե</span>
                </div>
              </div>
              <div className="deadline-format">
                <div>
                  <h4 className="seconds">1</h4>
                  <span>վայրկ</span>
                </div>
              </div>
            </div>
          </article>
        </section>
    </div>
  );
}
