function renderHello() {
    var data = {title: "LIVE IN LUXURY", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum molestias est unde in perferendis libero rerum fugiat, autem et obcaecati! Temporibus harum eius soluta cum est deserunt impedit? Tenetur, mollitia!",
    
    title:"Safe", text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum molestias est unde in perferendis libero rerum fugiat, autem et obcaecati! Temporibus harum eius soluta cum est deserunt impedit? Tenetur, mollitia!",

    title: "Secure", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum molestias est unde in perferendis libero rerum fugiat, autem et obcaecati! Temporibus harum eius soluta cum est deserunt impedit? Tenetur, mollitia!",

    title: "Refreshing", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum molestias est unde in perferendis libero rerum fugiat, autem et obcaecati! Temporibus harum eius soluta cum est deserunt impedit? Tenetur, mollitia!", name:"User"}
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, data);
    document.getElementById('target').innerHTML = rendered;
  }
  