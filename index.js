var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten()
{
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten()
{
  kittens.unshift("Ralph");
  return kittens;
}

function destructivelyRemoveLastKitten()
{
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift();
  return kittens;
}

function appendKitten()
{
  kittens.shift();
  return kittens;
}