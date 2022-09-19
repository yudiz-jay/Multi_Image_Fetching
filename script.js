let oInterval = {};
let oTimer = {};

function getInput() {
    var nImage = document.getElementById("nImage").value;
    var container = document.getElementById("container");
    let images = "img";
    let para = "para";



    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i = 0; i < nImage; i++) {
        if (parseInt(nImage) <= 5) {
            container.appendChild(document.createElement("br"));
            // Append a Label with input tag
            container.appendChild(document.createTextNode("Image : " + (i + 1)));
            var input = document.createElement("input");
            input.type = "text";
            input.className = "form-control";
            input.name = "nimage" + i;
            input.id = `txt_${i}`;
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
            // Append a span tag with button tag
            var span = document.createElement("span");
            span.innerHTML = `<button id="btn' + i +'" type="submit" onclick="getImage(${i})" class="btn btn-primary" value="submit">Save</button><br/>`
            container.appendChild(span);
            // Append a line break 
            container.appendChild(document.createElement("br"));
            // Append a image tag
            var image = document.createElement("img");
            // image.src = "https://getuikit.com/v2/docs/images/placeholder_600x400.svg";
            image.id = `${images}_${i}`;
            image.style.height = "50%";
            image.style.width = "50%";
            container.appendChild(image);
            // Append a line break
            container.appendChild(document.createElement("br"));
            // Append a Paragraph tag
            var paragraph = document.createElement("p");
            paragraph.id = `${para}_${i}`;
            container.appendChild(paragraph);
            //Dynamic objects
            oInterval[`interval_${i}`] = `interval_${i}`;
            oTimer[`timer_${i}`] = `timer_${i}`;
        }
        else {
            alert("Please Number must be a less or equal than 5");
            break;
        }

    }
}



function getImage(number) {
    const id = number;
    const txtid = 'txt_' + number;
    const imgid = 'img_' + number;
    const paraid = 'para_' + number;
    const url = "https://jsonplaceholder.typicode.com/photos";
    let second = parseInt(document.getElementById(txtid).value);
    var nNewSecond =  second;


    if (oTimer[`timer_${number}`]) {
        clearInterval(oTimer[`timer_${number}`]);
    }

    oTimer[`timer_${number}`] = setInterval(()=>{
        document.getElementById(paraid).innerHTML = "<h3>Timer : "+nNewSecond+"</h3>";
        nNewSecond--;
        if(nNewSecond == 0) {
            nNewSecond = second;
        }
    },1000);

    if (oInterval[`interval_${number}`]) {
        clearInterval(oInterval[`interval_${number}`]);
    }

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            let i = 0;

            oInterval[`interval_${number}`] = setInterval(() => {
                document.getElementById(imgid).src = json[i].url;
                // console.log(second * 1000);
                i++;
            }, second * 1000);
        });

}






