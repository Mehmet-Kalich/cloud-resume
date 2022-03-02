function getVisitorCount() {
  fetch(
    'https://1dmdyyqaz2.execute-api.us-east-1.amazonaws.com/counter-real/get-value'
  )
    .then(res => res.json())
    .then(res => {

      document.getElementById("count").innerHTML=res.body.Item.Quantity.N
    });
}

function updateVisitorCount() {
  fetch(
    'https://1dmdyyqaz2.execute-api.us-east-1.amazonaws.com/counter-real/update-counter'
  )
    .then(res => res.json())
    .then(res => {
    });
}

updateVisitorCount();
getVisitorCount();
