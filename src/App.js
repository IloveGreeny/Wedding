import "./App.css"

export default function App() {
  const months = ["Հունվար",
//
  ];
  const weekdays = [
//
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
            <img src="./public/image.jpg" alt="gift" />
          </article>
          <article className="gift-info">
            <h3>Արթուրի ու Տիրուհու Հարսանիք</h3>
            <h4 className="giveaway">
              Արթուրի ու Տիրուհու Հարսանիք Սկսվում է Ապրիլի 29-ին
            </h4>
            <p>
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
