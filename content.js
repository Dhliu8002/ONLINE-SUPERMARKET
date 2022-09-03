/* ITEMS */
const Data = [
    {
      name: "red apples",
      cathegory: "fruit",
      image: "red apples.jpg",
      rating: 8.2
    },
    {
      name: "bananas",
      cathegory: "fruit",
      image: "bananas.webp",
      rating: 7.0
    },
    {
      name: "orange carrots",
      cathegory: "vegetables and soy",
      image: "orange carrots.jpg",
      rating: 9.6
    }
]
const cardWidth = 150;
const cardHeight = 250;

var cardList = []

function SortCathegory(data, cathegory){
    "Returns the data with the right cathegory"
    var q = [];
    for (let i = 0; i < data.length; i++){
        let e = data[i];
        if (e.cathegory == cathegory){
            q.push(e);
        }
        }
        return q;
}

function ReorderRating(data){
    "Returns the data ordered by rating"
        var q = data;
        for(var i = 0; i < q.length; i++){
            for(var j = 0; j < ( q.length - i -1 ); j++){
                if(q[j].rating < q[j+1].rating){
                    var temp = q[j];
                    q[j] = q[j + 1];
                    q[j+1] = temp;
                }
            }
        }
    return q;
}
function SortOrdering(cathegory){
    "return the ordered data of the cathegory"
    q = SortCathegory(Data, cathegory);
    q = ReorderRating(q);
    return q;
}

/* CREATES A LIST OF THE CARDS THAT SHALL APPEAR IN CONTENT */
function ContentList(cathegory){
    var r = []
    var place = document.getElementById('content');
    q = SortOrdering(cathegory);
    tl = document.getElementById('title');
    tl.innerHTML = cathegory.toUpperCase();
    for (let i = 0; i < q.length; i++){
        var card = document.createElement('div');
        var img = document.createElement('img');
        var body = document.createElement('div');
        var title = document.createElement('h5');
        var content = document.createElement('p');
        card.classList.add('card');
        card.style.height = cardHeight + "px";
        card.style.width = cardWidth + "px";
        img.src = "img/" + q[i].image;
        img.alt = q[i].name + " image"
        img.classList.add('card-img-top');
        img.style.objectFit = 'contain';
        body.classList.add('card-baody');
        title.classList.add('card-title');
        title.innerHTML = q[i].name.toUpperCase();
        card.appendChild(img);
        body.appendChild(title);
        card.appendChild(body);
        r.push(card);
    }
    cardList = r;
    return r;
}
console.log(ContentList("fruit"));

function ContentWidthFromWindow(w){
  if (w > 800) {
    w = w-200;
  }
  return w;
}
function addAllToContent(width){
  if (cardList.length == 0){
    return null;
  }
  var place = document.getElementById("content");
  place.innerHTML = "";
  var cardnrow = Math.floor(width / cardWidth);
  var rowquantity = Math.ceil(cardList.length / cardnrow);
  var i = 0;
  for (let n = 0; n < rowquantity; n++){
    var row = document.createElement("div");
    row.classList.add("content-row");
    for (let a = 0; a < cardnrow && i<cardList.length; a++){
      var column = document.createElement("div");
      column.classList.add("content-column");
      column.style.flex = width / cardWidth * 100 + "%";
      var card = cardList[i];
      column.append(card);
      row.append(column);
      i++;
    }
    place.append(row);
  }
  return null;
}


window.addEventListener('resize', Tick);;
function Tick(){
  var nav = document.getElementById('nav');
  var windowHeight = window.innerHeight;
  controlHeight(windowHeight, nav);
  controlHeight(windowHeight - 70, document.getElementById("content"));
  var windowWidth = window.innerWidth;
  var contentWidth = ContentWidthFromWindow(windowWidth);
  addAllToContent(contentWidth);
}