import './modal.css'


function Modal() {

    var cb = document.querySelectorAll(".close");
    for (var i = 0; i < cb.length; i++) {
        cb[i].addEventListener("click", function() {
            var dia = this.parentNode.parentNode; /* You need to update this part if you change level of close button */
            dia.style.opacity = 0;
            dia.style.zIndex = -1;
        });
    }

    var mt = document.querySelectorAll(".modal-toggle");
    for (var i = 0; i < mt.length; i++) {
        mt[i].addEventListener("click", function() {
            var targetId = this.getAttribute("data-target");
            var target = document.getElementById(targetId);
            target.style.opacity = 1;
            target.style.zIndex = 9999;
        });
    }

    return (
    <>
        <a class="modal-toggle" data-target="openModal1">Open Modal window 1</a>
        <div id="openModal1" class="modal-wrapper">
            <div class="modal">
                <a href="#close" title="Close" class="close">X</a>
                <div class="modal-header">
                    <h2>Modal Box 1</h2>
                </div>
                <div class="modal-content">
                    <p>Some text for selection</p>
                </div>
            </div>
        </div>
    </>
    );
  };
  
  export default Modal;