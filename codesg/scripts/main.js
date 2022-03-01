$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
  });
});

$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 200) {
    $(".nav-menu").addClass("custom-navbar");
  } else {
    $(".nav-menu").removeClass("custom-navbar");
  }
});

$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 700) {
    $(".award-text").addClass("fromRight");
    $(".award-img").addClass("fromLeft");
  } else {
    $(".award-text").removeClass("fromRight");
    $(".award-img").removeClass("fromLeft");
  }
});

$(".gallery-list-item").click(function () {
  let value = $(this).attr("data-filter");
  $(this).addClass("active-item").siblings().removeClass("active-item");

  if (value === "all") {
    $(".filter").show(300);
  } else {
    $(".filter")
      .not("." + value)
      .hide(300);
    $(".filter")
      .filter("." + value)
      .show(300);
  }
});

$(window).scroll(function () {
  let position = $(this).scrollTop();
  console.log(position);
  if (position >= 4400) {
    $(".card-1").addClass("moveFromRight");
    $(".card-2").addClass("moveFromBottom");
    $(".card-3").addClass("moveFromLeft");
  } else {
    $(".card-1").removeClass("moveFromRight");
    $(".card-2").removeClass("moveFromBottom");
    $(".card-3").removeClass("moveFromLeft");
  }
});

async function getPlansList() {
  var plans = await axios.get("/plan/all");
  var planlist = plans.data;

  for (i in planlist) {
    document.getElementById("planslistrow").innerHTML += `
        <div class="col-lg-4">
        <div class="card card-1 text-light py-4 my-4 border-0 mx-auto">
          <div class="card-body">
            <h4 class="mb-5">${planlist[i].name}</h4>
            <h1>۲۰ <i class="fas fa-percent fa-sm"></i></h1>
            <ul class="list-unstyled">
              <li class="py-3 card-list-item">${planlist[i].price}</li>
              <li class="py-3 card-list-item">${planlist[i].email}</li>
              <li class="py-3 card-list-item">${planlist[i].phone}</li>
              <li class="py-3 card-list-item border-0">${planlist[i].date}</li>
            </ul>
            <a href="" class="btn membership-card-button text-light">ثبت نام</a>
          </div>
        </div>
      </div>   
        `;
  }
}
