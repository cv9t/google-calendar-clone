async function getLocation() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const position: any = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return { lat: position.coords.latitude, lon: position.coords.longitude };
  } catch (error) {
    return { lat: 52, lon: 104 };
  }
}

export { getLocation };
