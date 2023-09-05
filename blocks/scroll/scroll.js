import registerScrollLinkedAnimation from "/scripts/scroll-linked-animations.js";

export default function decorate(block) {
  let string = '';
  for (let i = 0; i < 300; i += 1) {
    string += '<div class="word-cloud-wrapper top-top">        <div class="word-cloud">          <span class="word">Analyse</span>          <span class="word">Shop</span>          <span class="word">E-Commerce</span>          <span class="word">Kreation</span>          <span class="word">Vermarktung</span>        </div>      </div>  <div class="word-cloud-wrapper top-bottom">  <div class="word-cloud">  <span class="word">Analyse</span>  <span class="word">Shop</span>  <span class="word">E-Commerce</span>  <span class="word">Kreation</span>  <span class="word">Vermarktung</span>  </div>  </div>  <div class="word-cloud-wrapper bottom-bottom">  <div class="word-cloud">  <span class="word">Analyse</span>  <span class="word">Shop</span>  <span class="word">E-Commerce</span>  <span class="word">Kreation</span>  <span class="word">Vermarktung</span>  </div>  </div>  <div class="word-cloud-wrapper bottom-top">  <div class="word-cloud">  <span class="word">Analyse</span>  <span class="word">Shop</span>  <span class="word">E-Commerce</span>  <span class="word">Kreation</span>  <span class="word">Vermarktung</span>  </div>  </div>';
  }
  block.innerHTML = `
      <div class="my-planet"></div>
      <h1>LET'S SPIN YOUR WORLD</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
      <div class="wrapper-wrapper">
      ${string}
      </div>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
`;

  registerScrollLinkedAnimation(block);
  block.querySelectorAll('.word-cloud-wrapper.top-top').forEach((wordCloud) => {
    registerScrollLinkedAnimation(wordCloud, 'top', 'top');
  });
  block.querySelectorAll('.word-cloud-wrapper.top-bottom').forEach((wordCloud) => {
    registerScrollLinkedAnimation(wordCloud, 'top', 'bottom');
  });
  block.querySelectorAll('.word-cloud-wrapper.bottom-bottom').forEach((wordCloud) => {
    registerScrollLinkedAnimation(wordCloud, 'bottom', 'bottom');
  });
  block.querySelectorAll('.word-cloud-wrapper.bottom-top').forEach((wordCloud) => {
    registerScrollLinkedAnimation(wordCloud, 'bottom', 'top');
  });
}
