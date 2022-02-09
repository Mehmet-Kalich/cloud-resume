
//Below a basic fetch request is used to fetch a response from the API's invoke link
// and then push the JSON response of the status to the "count" variable in the html
// in order to update the counter for the user + the backend. The code finishes
// with both functions being invoked

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
