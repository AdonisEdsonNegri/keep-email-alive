import axios from "axios";

const formatNumber = (value: number) =>
  value.toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

const sendEmail = () => {
  const now = new Date();
  const time = `${formatNumber(now.getHours())}:${formatNumber(now.getMinutes())}:${formatNumber(now.getSeconds())}`;


  axios.post(
      "https://api.emissorsatfiscal.net.br/send",
      {
        nome: "Robô",
        empresa: "Robô",
        telefone: "11912341234",
        email: "robo@keepalive.com",
        mensagem: "Keep alive.",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res: any) => console.log(`[${time}] ${res.data.result}`))
    .catch((err: any) => {
      console.log(
        `[${time}] Erro ${err.response.status} | ${err.response.statusText}`
      );
    });
};

sendEmail();
setInterval(() => sendEmail(), 1800000);
