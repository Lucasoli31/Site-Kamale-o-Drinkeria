export type MenuItem = {
  name: string;
  price: number;
  highlight?: boolean;
  description?: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  isStar?: boolean;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "drinks",
    title: "Drinks",
    isStar: true,
    items: [
      { name: "Chá Comigo", price: 60, highlight: true, description: "Jägermeister, chá de limão, saquê, limão espremido e toque de maçã verde. Um drink equilibrado e refrescante.", image: "drink-cha-comigo.jpg" },
      { name: "Chama o Bombeiro", price: 34, description: "Fireball, Coca-Cola, gengibre e limão. Um drink intenso, gelado e com toque picante.", image: "drink-chama-o-bombeiro.jpg" },
      { name: "No Pain, No Gain", price: 34, description: "Licor de café, maracujá, laranja e tônica zero. Equilíbrio perfeito entre doce e cítrico.", image: "drink-no-pain-no-gain.jpg" },
      { name: "Alien Blood", price: 32, description: "Vodka, suco de limão, xarope de maçã verde, hortelã e água com gás. Refrescante e misterioso.", image: "drink-alien-blood.jpg" },
      { name: "Banheira do Gugu", price: 34, description: "Vodka, suco de limão, xarope de menta e soda de limão. Refrescância com toque divertido.", image: "drink-banheira-do-gugu.jpg" },
      { name: "Thommy Shelby", price: 36, description: "Jim Beam, vermute tinto, gin e Angostura de laranja. Finalizado com canela.", image: "drink-thommy-shelby.jpg" },
      { name: "Viking Mule", price: 34, description: "Versão do Moscow Mule com vodka, limão, xarope de mel, laranja desidratada e gás.", image: "drink-viking-mule.jpg" },
      { name: "Unicorn", price: 32, description: "Suco de limão siciliano, xarope de melancia, água com gás e toque doce especial.", image: "drink-unicorn.jpg" },
      { name: "Honolulu", price: 32, description: "Rum Bacardi, limão, xarope de tangerina, laranja e gás. Tropical e leve.", image: "drink-honolulu.jpg" },
      { name: "Burning Mango", price: 36, highlight: true, description: "Tequila ouro, manga, limão, toque picante e borda de sal.", image: "drink-burning-mango.jpg" },
    ],
  },
  {
    id: "chopp",
    title: "Chopp",
    items: [
      { name: "Chopp Pilsen 400ml", price: 13, description: "Leve, refrescante e fácil de beber.", image: "chopp-pilsen.jpg" },
      { name: "Chopp IPA 400ml", price: 17, description: "Encorpado, aromático e com amargor marcante.", image: "chopp-ipa.jpg" },
    ],
  },
  {
    id: "brasileiros",
    title: "Brasileiros",
    items: [
      { name: "Kariri com Mel", price: 20, description: "Doce e equilibrado com toque de mel.", image: "kariri-com-mel.jpg" },
      { name: "Bombeirinho", price: 20, description: "Clássico brasileiro intenso e marcante.", image: "bombeirinho.jpg" },
      { name: "Vodka + Energético", price: 20, description: "Combinação energética e refrescante.", image: "vodka-energetico.jpg" },
    ],
  },
  {
    id: "classicos",
    title: "Clássicos",
    items: [
      { name: "Negroni", price: 34, description: "Drink forte e amargo na medida certa.", image: "classico-negroni.jpg" },
      { name: "Margarita", price: 34, description: "Refrescante, cítrica e com toque de sal.", image: "classico-margarita.jpg" },
      { name: "Tom Collins", price: 34, description: "Leve, cítrico e super refrescante.", image: "classico-tom-collins.jpg" },
      { name: "Dry Martini", price: 34, description: "Elegante, seco e clássico.", image: "classico-dry-martini.jpg" },
    ],
  },
  {
    id: "gins",
    title: "Gins",
    items: [
      { name: "Gin Tradicional", price: 30, description: "Gin com limão, água tônica e zimbro.", image: "gin-tradicional.jpg" },
      { name: "Gin Tropical", price: 30, description: "Gin com energético tropical, laranja e manjericão.", image: "gin-tropical.jpg" },
      { name: "Apple Gin", price: 30, description: "Gin com energético de maçã verde e limão.", image: "gin-apple.jpg" },
    ],
  },
  {
    id: "caipirinhas",
    title: "Caipirinhas",
    items: [
      { name: "Hot Lemon", price: 28, description: "Limão, gelo, açúcar e destilado.", image: "caipirinha-hot-lemon.jpg" },
      { name: "Fresh Melon", price: 28, description: "Limão, melão e destilado.", image: "caipirinha-fresh-melon.jpg" },
      { name: "Dreams", price: 28, description: "Maracujá, morango e limão.", image: "caipirinha-dreams.jpg" },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    isStar: true,
    items: [
      { name: "Kamaleão", price: 36, highlight: true, description: "Blend artesanal, provolone, bacon, maionese de alho, mostarda, picles, cebola roxa e pão brioche.", image: "burger-kamaleao.jpg" },
      { name: "K-X Salada", price: 34, description: "Blend artesanal, queijo prato, maionese da casa, rúcula, tomate e pão brioche.", image: "burger-kx-salada.jpg" },
      { name: "K-X Burguer", price: 30, description: "Blend artesanal, queijo prato e maionese da casa no brioche.", image: "burger-kx-burguer.jpg" },
      { name: "The Monster", price: 48, highlight: true, description: "Duplo blend, queijo, bacon, maionese da casa, barbecue e cebola crispy.", image: "burger-the-monster.jpg" },
      { name: "Du Mato", price: 36, description: "Blend vegano, queijo prato, maionese da casa, rúcula, tomate e cebola crispy.", image: "burger-du-mato.jpg" },
      { name: "Big Hot Cheese Peppers", price: 36, description: "Blend, queijo prato, creme de gorgonzola, geleia de pimenta, rúcula e pão australiano.", image: "burger-big-hot.jpg" },
      { name: "Gaucho", price: 34, description: "Blend, queijo prato, bacon, maionese, barbecue e pão brioche com gergelim.", image: "burger-gaucho.jpg" },
    ],
  },
  {
    id: "porcoes",
    title: "Porções",
    items: [
      { name: "Batata Chips", price: 26, description: "Batatas crocantes com sal, ervas finas e maionese defumada.", image: "porcao-batata-chips.jpg" },
      { name: "Pão de Pepperoni com Requeijão", price: 55, description: "Baguete recheada com pepperoni e requeijão, acompanha maionese defumada.", image: "porcao-pao-pepperoni.jpg" },
      { name: "Linguiça Suína Defumada", price: 55, description: "Temperada no alho e ervas, acompanha farofa e molho barbecue.", image: "porcao-linguica-suina.jpg" },
    ],
  },
  {
    id: "lanches",
    title: "Lanches",
    items: [
      { name: "El Choripan", price: 36, description: "Linguiça suína, queijo provolone, mostarda e chimichurri na baguete.", image: "lanche-el-choripan.jpg" },
    ],
  },
  {
    id: "softdrinks",
    title: "Soft Drinks",
    items: [
      { name: "Soda Italiana", price: 14, image: "soft-soda-italiana.jpg" },
      { name: "Água", price: 5, image: "soft-agua.jpg" },
      { name: "Coca Cola", price: 5, image: "soft-coca-cola.jpg" },
      { name: "Tônica", price: 6, image: "soft-tonica.jpg" },
      { name: "Energético Copo", price: 12, image: "soft-energetico.jpg" },
    ],
  },
];
