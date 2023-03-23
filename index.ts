import axios from "axios";

const sendEmail = () => {
  axios
    .post(
      "http://localhost:3333/send",
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
    .then((res: any) => {
      console.log(res.data);
    })
    .catch((err: any) => {
      console.log(err);
    });
};

setInterval(() => sendEmail(), 10000);
