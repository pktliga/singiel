var players =["MAREK.M",
              "ADAM.C",
              "HUBERT.K",
              "SŁAWEK.M",
              "ARTUR.M",
              "RYSIU.N",
              "ZBYSZEK.A",
              "RYSIU_CH",
              "ROBERT.G",
              "MAREK.O",
              "KUBA.C",
              "MARIUSZ.N",
              "STASIU.M",
              "JUREK.Ł",
              "KRZYSZTOF.W",
              "JACEK.D",
              "ANTONI.C",
              "HUBERT.Z",
              "GENIU.Z",
              "JANUSZ.M",
              "DAREK.P",
              "KONRAD.W",
              "KAROL.B",
              "ANDRZEJ.Z",
              "SEBASTIAN.P",
              "KACPER.P",
              "ADA.P",
              "KRYSTIAN.M",
              "ALAN.Ł",
              "ŁUKASZ.S",
              "MARTYNA.Z",
              "SŁAWEK.Z",
              "KINGA.B",
              "PRZEMEK.B",
              "PIOTR.Z",
              "EWA.B",
              "KRZYSZTOF.C",
              "WIESŁAW.T"
              ];

  players.sort();
  var a = 0;
  for (var i = 0; i < players.length; i++) {
       checkBoxDisplay.innerHTML+='<input id="ch'+a+'" type="checkbox" class="checks1" name="playername" value="'+players[i]+'">'+'<label for="ch'+a+'">'+players[i]+'</label>'+"<br>";
       a++;
  }
  var firstplayerpick = [];
  var secplayerpick = [];

  function getCheckedValues(){
      var checkboxes = document.getElementsByName("playername");
      for(var i = 0; i < checkboxes.length; i++)
      {
          if(checkboxes[i].checked)
              //firstplayerpick[i]=checkboxes[i].value;
              //console.log(checkboxes[i].value)
              firstplayerpick.push(checkboxes[i].value)
      }

        console.log(firstplayerpick);
  }

  button1.onclick = function(){
      getCheckedValues();
      if(firstplayerpick.length==0){
        alert("Wybierz zawodników!!");
      }else{
        const valuesToRemove = firstplayerpick;
        const filteredItems = players.filter(item => !valuesToRemove.includes(item));

        console.log(filteredItems);

        checkBoxDisplay.style.display="none";
        button1.style.display="none";
        button2.style.display="block";
        result1.style.display="block";

        for (var i = 0; i < filteredItems.length; i++) {
            result1.innerHTML+='<input id="ch'+a+'" type="checkbox" class="checks2" name="playername2" value="'+filteredItems[i]+'">'+'<label for="ch'+a+'">'+filteredItems[i]+'</label>'+"<br>";
            a++;
        }
      }
      window.scrollTo(0, 0);
  }

  function getCheckedValues2(){
      var checkboxes = document.getElementsByName("playername2");
      for(var i = 0; i < checkboxes.length; i++)
      {
          if(checkboxes[i].checked)
              secplayerpick.push(checkboxes[i].value)
      }
  }

  button2.onclick = function(){
    getCheckedValues2();
    console.log(secplayerpick);
        if(secplayerpick.length<firstplayerpick.length){
          alert("Wybrano za mało zawodników");
        }else{
          cntvis.style.display="none";

          function* shuffle(array1) {
              var i = array1.length;
              while (i--) {
                  yield array1.splice(Math.floor(Math.random() * (i+1)), 1)[0];
              }
          }
          var random1 = shuffle(firstplayerpick);
          var random2 = shuffle(secplayerpick);
          var table = document.getElementById("myTable");
          var sum = firstplayerpick.length+secplayerpick.length;

          var counter = 1;
          var n = 0;
            function tableDisplay(){


                  var row = table.insertRow(0);
                  var cell2 = row.insertCell(0);
                  var cell3 = row.insertCell(0);
                  var cell1 = row.insertCell(1);
                  if(firstplayerpick.length==0){
                    cell1.innerHTML = random2.next().value;
                    if(secplayerpick.length==0){
                      cell2.innerHTML = "PARA NR.1";

                    }else{

                      cell2.innerHTML = random2.next().value;
                      /*if(counter%2==0){
                        cell2.style.backgroundColor="#ffffff";
                        cell1.style.backgroundColor="#ffffff";
                        cell3.style.backgroundColor="#ffffff";

                      }else{
                        cell2.style.backgroundColor="yellow";
                        cell1.style.backgroundColor="yellow";
                        cell3.style.backgroundColor="yellow";

                      }*/


                    }
                  }else{
                    cell1.innerHTML = random1.next().value;
                    cell2.innerHTML = random2.next().value;
                    /*if(counter%2==0){
                      cell2.style.backgroundColor="#ffffff";
                      cell1.style.backgroundColor="#ffffff";
                      cell3.style.backgroundColor="#ffffff";

                    }else{
                      cell2.style.backgroundColor="yellow";
                      cell1.style.backgroundColor="yellow";
                      cell3.style.backgroundColor="yellow";

                    }*/
                  }
                  cell3.innerHTML = counter;
                  counter++;
                  n++;

                    reloadbutton.style.display="block";
            }


            var xd=0;
              setInterval(function(){
                if(xd<sum/2){
                  tableDisplay();

                }
                xd++;
              },1000);

            reloadbutton.style.display="block";

            reloadbutton.onclick = function(){
              location.reload();
            }
            window.scrollTo(0,0);
        }
  }
