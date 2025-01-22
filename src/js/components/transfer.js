import TransferElements from 'transfer-elements';
new TransferElements(
  {
    sourceElement: document.getElementById('id-2'),
    breakpoints: {
      575: {
        targetElement: document.getElementById('id-1')
      }
    }
  }
);
