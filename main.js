function func(a, b) {
  if (a === b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
}
console.log("შედარების ფუნქცია:", func(5, 4));

function tempConverter(tempFar) {
  let celsius = ((tempFar - 32) * 5) / 9;

  if (typeof tempFar === "number") {
    return celsius;
  } else {
    return false;
  }
}
console.log("ცელსიუსში გადაყვანის ფუნქცია:", tempConverter("70"));

function numbCalc(a, b, operation) {
  if (typeof a === "number" && typeof b === "number") {
    if (operation == "+") {
      return a + b;
    } else if (operation == "-") {
      return a - b;
    } else if (operation == "*") {
      return a * b;
    } else if (operation == "/") {
      return a / b;
    }
  } else {
    return false;
  }
}
console.log("გამოთვლის ფუნქცია:", numbCalc(4, 5, "/"));
