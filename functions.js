function hello(name){
    return(`hello ${name}`);
}
const RGB_COLORS = {
    red: [255, 0, 0],
    green: [0, 255, 0],
    blue: [0, 0, 255],
  };
  
  function colour_mix(rgb_colour1, rgb_colour2) {
    if (!RGB_COLORS[rgb_colour1] || !RGB_COLORS[rgb_colour2]) {
      return "Error";
    }
  
    const [r1, g1, b1] = RGB_COLORS[rgb_colour1];
    const [r2, g2, b2] = RGB_COLORS[rgb_colour2];
  
    const r = Math.round((r1 + r2) / 2);
    const g = Math.round((g1 + g2) / 2);
    const b = Math.round((b1 + b2) / 2);
  
    if (rgb_colour1 === rgb_colour2) {
      return rgb_colour1;
    }
  
    if (rgb_colour1 === "red" && rgb_colour2 === "blue") {
      return "fuchsia";
    }
  
    if (rgb_colour1 === "red" && rgb_colour2 === "green") {
      return "yellow";
    }
  
    if (rgb_colour1 === "green" && rgb_colour2 === "blue") {
      return "aqua";
    }
  
    return `rgb(${r}, ${g}, ${b})`;
  };

function largest_product(val1, val2, val3) {
    const max1 = Math.max(val1, val2, val3);
    const max2 = Math.max(val1, val2, val3);
  
    if (max1 === max2) {
      return max1 * Math.max(val1, val2, val3);
    }
  
    return max1 * max2;
  };

const DAYS_OF_THE_WEEK = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  
  function day_of_the_week(day_num) {
    if (day_num < 1 || day_num > 7) {
      return "Error";
    }
  
    return DAYS_OF_THE_WEEK[day_num];
  };
  
function pay_raise(status, years, salary) {
    let raise = 0;
  
    if (status === "F") {
      if (years >= 10) {
        raise = 0.05;
      } else if (years < 4) {
        raise = 0.015;
      } else {
        raise = 0.02;
      }
    } else if (status === "P") {
      if (years > 10) {
        raise = 0.03;
      } else if (years < 4) {
        raise = 0.01;
      } else {
        raise = 0.02;
      }
    }
  
    return salary * (1 + raise);
  };  

function is_leap(year) {
    if (year % 4 !== 0) {
      return false;
    }
  
    if (year % 100 !== 0) {
      return true;
    }
  
    if (year % 400 !== 0) {
      return false;
    }
  
    return true;
  }
  
export {hello, colour_mix, largest_product, day_of_the_week, pay_raise, is_leap}