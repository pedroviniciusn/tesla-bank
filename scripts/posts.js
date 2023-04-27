const posts = document.querySelector("#posts");

const posts_contents = [
  {
    img: "/startup.png",
    alt: "Startup",
    title: "Como começar a usar o TeslaBank para sua startup",
    content:
      "Descubra como a sua startup pode se beneficiar dos serviçosfinanceiros do TeslaBank. Nesta postagem, apresentamos um guiafácil para ajudá-lo a começar a usar o TeslaBank.",
  },
  {
    img: "/coin.png",
    alt: "Coins",
    title: "10 coisas que ninguém te contou sobre o TeslaBank",
    content:
      "Você está pensando em usar o TeslaBank para gerenciar suas finanças pessoais? Antes de decidir, confira esta postagem para descobrir 10 coisas que ninguém te contou sobre o TeslaBank.",
  },
  {
    img: "/coinandpiggy.png",
    alt: "Coins and piggy",
    title: "7 maneiras de melhorar seus hábitos de poupança",
    content:
      "Você deseja economizar dinheiro, mas acha difícil manter bons hábitos de poupança? Confira esta postagem para descobrir sete maneiras eficazes de melhorar seus hábitos de poupança.",
  },
];

function loadPosts() {
  posts.innerHTML = posts_contents
    .map((post) => {
      return `
    <div
    class="grid grid-cols-1 gap-5 xl:w-80 lg:w-80 md:w-72 sm:w-64 "
    >
      <img src="${post.img}" alt="${post.alt}" class="w-full" />
      <h2
        class="xl:text-xl lg:text-xl md:text-lg sm:text-base font-medium"
      >
        ${post.title}
      </h2>
      <p class="text-sm tracking-tighter">
        ${post.content}
      </p>
    </div>
  `;
    })
    .join("");
}

export { loadPosts };
