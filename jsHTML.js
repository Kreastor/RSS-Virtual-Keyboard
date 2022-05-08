const Form = document.createElement('form'); 
document.body.append(Form);
Form.id = "teaxarea-form";
Form.action = "#";
Form.method = "post";

Form.insertAdjacentHTML("afterbegin", '<textarea id="textarea"></textarea>');


const KeyboardContainer = document.createElement('div');
KeyboardContainer.id = "KeyboardContainer";

document.body.append(KeyboardContainer);

KeyboardContainer.insertAdjacentHTML("afterbegin", '<div id="row1"></div>');
KeyboardContainer.insertAdjacentHTML("beforeend", '<div id="row2"></div>');
KeyboardContainer.insertAdjacentHTML("beforeend", '<div id="row3"></div>');
KeyboardContainer.insertAdjacentHTML("beforeend", '<div id="row4"></div>');
KeyboardContainer.insertAdjacentHTML("beforeend", '<div id="row5"></div>');


row1.insertAdjacentHTML("afterbegin", '<div class="extreme-button row1"><span class="shift-letter">~</span>`</div>');
row1.insertAdjacentHTML("beforeend", '<div class="main-button row1"><span class="shift-letter">!</span>1</div>');
row1.insertAdjacentHTML("beforeend", '<div class="main-button row1"><span class="shift-letter">@</span>2</div>');
row1.insertAdjacentHTML("beforeend", '<div class="main-button row1"><span class="shift-letter">#</span>3</div>');
row1.insertAdjacentHTML("beforeend", '<div class="main-button row1"><span class="shift-letter">$</span>4</div>');
row1.insertAdjacentHTML("beforeend", '<div class="main-button row1"><span class="shift-letter">%</span>5</div>');
row1.insertAdjacentHTML("beforeend", '<div class="main-button row1"><span class="shift-letter">^</span>6</div>');
row1.insertAdjacentHTML("beforeend", '<div class="main-button row1"><span class="shift-letter">&</span>7</div>');
row1.insertAdjacentHTML("beforeend", '<div class="main-button row1"><span class="shift-letter">*</span>8</div>');
row1.insertAdjacentHTML("beforeend", '<div class="main-button row1"><span class="shift-letter">(</span>9</div>');
row1.insertAdjacentHTML("beforeend", '<div class="main-button row1"><span class="shift-letter">)</span>0</div>');
row1.insertAdjacentHTML("beforeend", '<div class="main-button row1"><span class="shift-letter">_</span>-</div>');
row1.insertAdjacentHTML("beforeend", '<div class="main-button row1"><span class="shift-letter">+</span>=</div>');
row1.insertAdjacentHTML("beforeend", '<div class="extreme-button" id="backspace"><span class="shift-letter"></span>Backspace</div>');


row2.insertAdjacentHTML("afterbegin", '<div class="extreme-button" id="tab"><span class="shift-letter"></span>Tab</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter"></span>Q</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter"></span>W</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter"></span>E</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter"></span>R</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter"></span>T</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter"></span>Y</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter"></span>U</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter"></span>I</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter"></span>O</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter"></span>P</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter"></span>[</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter"></span>]</div>');
row2.insertAdjacentHTML("beforeend", '<div class="main-button row2"><span class="shift-letter">|</span>\\</div>');
row2.insertAdjacentHTML("beforeend", '<div class="extreme-button"><span class="shift-letter"></span>DEL</div>');

row3.insertAdjacentHTML("afterbegin", '<div class="extreme-button" id="caps-lock"><span class="shift-letter"></span>Caps Lock</div>');
row3.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>A</div>');
row3.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>S</div>');
row3.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>D</div>');
row3.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>F</div>');
row3.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>G</div>');
row3.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>H</div>');
row3.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>J</div>');
row3.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>K</div>');
row3.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>L</div>');
row3.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>;</div>');
row3.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>\'</div>');
row3.insertAdjacentHTML("beforeend", '<div class="extreme-button" id="enter"><span class="shift-letter"></span>Enter</div>');

row4.insertAdjacentHTML("afterbegin", '<div class="extreme-button" id="shift"><span class="shift-letter"></span>Shift</div>');
row4.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>\\</div>');
row4.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>Z</div>');
row4.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>X</div>');
row4.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>C</div>');
row4.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>V</div>');
row4.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>B</div>');
row4.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>N</div>');
row4.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>M</div>');
row4.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>,</div>');
row4.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>.</div>');
row4.insertAdjacentHTML("beforeend", '<div class="main-button"><span class="shift-letter"></span>/</div>');
row4.insertAdjacentHTML("beforeend", '<div class="extreme-button"><span class="shift-letter"></span>↑</div>');
row4.insertAdjacentHTML("beforeend", '<div class="extreme-button"><span class="shift-letter"></span>Shift</div>');

row5.insertAdjacentHTML("afterbegin", '<div class="extreme-button ctrl"><span class="shift-letter"></span>Ctrl</div>');
row5.insertAdjacentHTML("beforeend", '<div class="extreme-button"><span class="shift-letter"></span>Win</div>');
row5.insertAdjacentHTML("beforeend", '<div class="extreme-button"><span class="shift-letter"></span>Alt</div>');
row5.insertAdjacentHTML("beforeend", '<div class="main-button" id="space"><span class="shift-letter"></span></div>');
row5.insertAdjacentHTML("beforeend", '<div class="extreme-button"><span class="shift-letter"></span>Alt</div>');
row5.insertAdjacentHTML("beforeend", '<div class="extreme-button ctrl"><span class="shift-letter"></span>Ctrl</div>');
row5.insertAdjacentHTML("beforeend", '<div class="extreme-button"><span class="shift-letter"></span>←</div>');
row5.insertAdjacentHTML("beforeend", '<div class="extreme-button"><span class="shift-letter"></span>↓</div>');
row5.insertAdjacentHTML("beforeend", '<div class="extreme-button"><span class="shift-letter"></span>→</div>');