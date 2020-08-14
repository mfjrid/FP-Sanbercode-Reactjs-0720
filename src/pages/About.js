import React from "react";

const About = () => {
  return (
    <div style={{ padding: "50px", border: "1px solid #ccc" }}>
      <h1 style={{ textAlign: "center" }}>FilMy - Web Review Film</h1>
      <br />
      <p>
        Filmy membantu kamu memilih film terbaik untuk ditonton dengan
        menampilkan review-review film dari orang lain. Kamu juga bisa membuat
        review film yang telah kamu tonton. Silahkan login untuk menambah atau
        mengedit data film yang ada, atau jika kamu belum punya akun, silahkan
        klik register.
      </p>
      <br />
      <ol>
        <li>
          <strong style={{ width: "100px" }}>Nama:</strong> Muhammad Fajar
        </li>
        <li>
          <strong style={{ width: "100px" }}>Email:</strong> mfjr48@gmail.com
        </li>
        <li>
          <strong style={{ width: "100px" }}>
            Sistem Operasi yang digunakan:
          </strong>{" "}
          Linux Mint 19.2
        </li>
        <li>
          <strong style={{ width: "100px" }}>Akun Github:</strong>{" "}
          github.com/mfjrid
        </li>
        <li>
          <strong style={{ width: "100px" }}>Akun Telegram:</strong> @Mfjrid -
          081932106764
        </li>
      </ol>
    </div>
  );
};

export default About;
