    // 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    function tableCreate(r, c) {

        let target = document.getElementById('target');
        let tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.setAttribute('border', '1');

        for (let i = 0; i < r; i++) {
            
            let tr = document.createElement('tr');
            tr.style.height = '50px';

            for (var j = 0; j < c; j++) {
                
                let td = document.createElement('td');
                 td.innerHTML = (i +1 ) * (j + 1);

            tr.appendChild(td)
           
          }
          tbl.appendChild(tr);
        }
        target.appendChild(tbl)
      }

      tableCreate(10, 10)


})();
