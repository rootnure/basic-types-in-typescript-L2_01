{
  // nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching")
    }
    else {
      console.log("There is nothing to search")
    }
  }
  searchName(null);

  // unknown types (typeof)
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === 'number') {
      const speedInMeterPerSecond = value * 1000 / 3600;
      console.log(`The speed is ${speedInMeterPerSecond} ms^-1`)
    }
    else if (typeof value === 'string') {
      const [speedInMeterPerSecond] = value.split(' ');
      console.log(`The speed is ${parseFloat(speedInMeterPerSecond) * 1000 / 3600} ms^-1`)
    }
    else {
      console.log('Wrong Input');
    }
  }

  getSpeedInMeterPerSecond(55);
  getSpeedInMeterPerSecond(`55 kmH^-1`);
  getSpeedInMeterPerSecond(false);



  //
}