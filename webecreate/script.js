function orderWA(paket) {
  const phone = "628XXXXXXXXX"; // GANTI nomor WA kamu
  const message = `Halo WebEcreate, saya tertarik dengan Paket ${paket}. Bisa dibantu?`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
