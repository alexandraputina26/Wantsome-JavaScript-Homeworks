const body = document.querySelector('body');
const requestUrl = "https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json";

const request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
    const cssColorNames = request.response;
    populateBody(cssColorNames);
    // showColors(cssColorNames);
}

const populateBody = jsonObj => {
    const cssColorNames = [request.response];
    const myColor1 = document.createElement('h5');
    myColor1.textContent = cssColorNames[0];
    body.appendChild(myColor1);
}

const showColors = jsonObj => {
    const colorsTable = jsonObj['cssColorNames'];
    for (let i = 0; i < colorsTable.length; i++) {
        const my2Color = document.createElement('h3');
        const my3Color = document.createElement('h3');
        const my4Color = document.createElement('h3');
        const my5Color = document.createElement('h3');
    }
}



const populateBody = jsonObj => {

for (let i = 0; i < jsonObj.length; i++) {
    const colorName = jsonObj[i];
} for (let j = 0; j < colorName.length; j++) {
    const color1 = colorName[j]
}


    const my1Color = document.createElement('h4');
    const color1 = document.createElement('div');
    color1.textContent = '_____';
    color1.style.color = 'aliceblue';
    color1.style.backgroundColor = 'aliceblue';
    my1Color.textContent = 'aliceblue: ' + jsonObj['aliceblue'];
    body.appendChild(my1Color);
    my1Color.appendChild(color1);

    const my2Color = document.createElement('h4');
    const color2 = document.createElement('div');
    color2.textContent = '_____';
    color2.style.color = 'antiquewhite';
    color2.style.backgroundColor = 'antiquewhite';
    my2Color.textContent = 'antiquewhite ' + jsonObj['antiquewhite'];
    body.appendChild(my2Color);
    my2Color.appendChild(color2);

    const my3Color = document.createElement('h4');
    const color3 = document.createElement('div');
    color3.textContent = '_____';
    color3.style.color = jsonObj['aqua'];
    color3.style.backgroundColor = jsonObj['aqua'];
    my3Color.textContent = 'aqua: ' + jsonObj['aqua'];
    body.appendChild(my3Color);
    my3Color.appendChild(color3);

    const my4Color = document.createElement('h4');
    const color4 = document.createElement('div');
    color4.textContent = '_____';
    color4.style.color = jsonObj['aquamarine'];
    color4.style.backgroundColor = jsonObj['aquamarine'];
    my4Color.textContent = 'aquamarine: ' + jsonObj['aquamarine'];
    body.appendChild(my4Color);
    my4Color.appendChild(color4);

    const my5Color = document.createElement('h4');
    const color5 = document.createElement('div');
    color5.textContent = '_____';
    color5.style.color = jsonObj['azure'];
    color5.style.backgroundColor = jsonObj['azure'];
    my5Color.textContent = 'azure: ' + jsonObj['azure'];
    body.appendChild(my5Color);
    my5Color.appendChild(color5);

    const my6Color = document.createElement('h4');
    const color6 = document.createElement('div');
    color6.textContent = '_____';
    color6.style.color = jsonObj['beige'];
    color6.style.backgroundColor = jsonObj['beige'];
    my6Color.textContent = 'beige: ' + jsonObj['beige'];
    body.appendChild(my6Color);
    my6Color.appendChild(color6);

    const my7Color = document.createElement('h4');
    const color7 = document.createElement('div');
    color7.textContent = '___';
    color7.style.color = 'bisque';
    color7.style.backgroundColor = 'bisque';
    my7Color.textContent = 'bisque: ' + jsonObj['bisque'];
    body.appendChild(my7Color);
    my7Color.appendChild(color7);

    const my8Color = document.createElement('h4');
    const color8 = document.createElement('div');
    color8.textContent = '___';
    color8.style.color = 'black';
    color8.style.backgroundColor = 'black';
    my8Color.textContent = 'black: ' + jsonObj['black'];
    body.appendChild(my8Color);
    my8Color.appendChild(color8);

    const my9Color = document.createElement('h4');
    const color9 = document.createElement('div');
    color9.textContent = '___';
    color9.style.color = 'blanchedalmond';
    color9.style.backgroundColor = 'blanchedalmond';
    my9Color.textContent = 'blanchedalmond: ' + jsonObj['blanchedalmond'];
    body.appendChild(my9Color);
    my9Color.appendChild(color9);

    const my10Color = document.createElement('h4');
    const color10 = document.createElement('div');
    color10.textContent = '___';
    color10.style.color = 'blue';
    color10.style.backgroundColor = 'blue';
    my10Color.textContent = 'blue: ' + jsonObj['blue'];
    body.appendChild(my10Color);
    my10Color.appendChild(color10);
    
    const my11Color = document.createElement('h4');
    const color11 = document.createElement('div');
    color11.textContent = '___';
    color11.style.color = 'blueviolet';
    color11.style.backgroundColor = 'blueviolet';
    my11Color.textContent = 'blueviolet: ' + jsonObj['blueviolet'];
    body.appendChild(my11Color);
    my11Color.appendChild(color11);


}

