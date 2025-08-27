  function addChild() {
      const container = document.getElementById('childrenContainer');

      const row = document.createElement('div');
    
      const input = document.createElement('input');
      input.type = 'text';
      input.name = 'child';
      input.placeholder = 'Enter child name';

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.textContent = 'remove';
      removeBtn.onclick = () => row.remove();

  
      row.appendChild(input);
      row.appendChild(removeBtn);
      container.appendChild(row);
    }


