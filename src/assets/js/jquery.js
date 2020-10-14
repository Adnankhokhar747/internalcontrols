$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')), $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='number'],input[type='url']"),
            isValid = true;
            
        $(".form-group").removeClass("has-error");

        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
                
            }
        }
        if(!isValid){
            alert('Fill all Fields');
        }
        
        if (isValid){
            nextStepWizard.removeAttr('disabled').trigger('click');
            
            if(curStepBtn == "step-1"){
                $('.new_lease1').css('display','block');
                $('.new_lease').css('display','none');
                $('.new_lease2').css('display','none');
                $('.new_lease3').css('display','none');
                $('.new_lease4').css('display','none');
                $('.bolder').css('font-weight','normal');
                $('.bolder1').css('font-weight','bolder');
                $('.bolder2').css('font-weight','normal');
                $('.bolder3').css('font-weight','normal');
                $('.bolder4').css('font-weight','normal');
            }
            if(curStepBtn == "step-2"){
                $('.new_lease2').css('display','block');
                $('.new_lease').css('display','none');
                $('.new_lease1').css('display','none');
                $('.new_lease3').css('display','none');
                $('.new_lease4').css('display','none');
                $('.bolder').css('font-weight','normal');
                $('.bolder2').css('font-weight','bolder');
                $('.bolder1').css('font-weight','normal');
                $('.bolder3').css('font-weight','normal');
                $('.bolder4').css('font-weight','normal');
            }
            if(curStepBtn == "step-3"){
                $('.new_lease3').css('display','block');
                $('.new_lease').css('display','none');
                $('.new_lease1').css('display','none');
                $('.new_lease2').css('display','none');
                $('.new_lease4').css('display','none');
                $('.bolder').css('font-weight','normal');
                $('.bolder3').css('font-weight','bolder');
                $('.bolder1').css('font-weight','normal');
                $('.bolder2').css('font-weight','normal');
                $('.bolder4').css('font-weight','normal');
            }
            if(curStepBtn == "step-4"){
                $('.new_lease4').css('display','block');
                $('.new_lease').css('display','none');
                $('.new_lease1').css('display','none');
                $('.new_lease3').css('display','none');
                $('.new_lease2').css('display','none');
                $('.bolder').css('font-weight','normal');
                $('.bolder4').css('font-weight','bolder');
                $('.bolder1').css('font-weight','normal');
                $('.bolder3').css('font-weight','normal');
                $('.bolder2').css('font-weight','normal');
            }
        } 
    });
    $('div.setup-panel div a.btn-primary').trigger('click');
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function Validate() {
    var password = document.getElementById("txtPassword").value;
    var confirmPassword = document.getElementById("txtConfirmPassword").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

$(document).ready(function (){
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closes")[0];

    // When the user clicks the button, open the modal 
    

    // When the user clicks on <span> (x), close the modal
    

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
});
function show(select_item) {
    if (select_item == 1) {
        hiddenDiv.style.visibility='visible';
        hiddenDiv.style.display='block';
        lease_no.style.display='none';
        lease_no.style.visibility='hidden';
    } 
    else if(select_item == 0){
        hiddenDiv.style.visibility='hidden';
        hiddenDiv.style.display='none';
        lease_no.style.display='block'
        lease_no.style.visibility='visible';
        hiddenDiv1.style.visibility='hidden';
        hiddenDiv1.style.display='none';
        hiddenDiv2.style.visibility='hidden';
        hiddenDiv2.style.display='none';
        hiddenDiv3.style.visibility='hidden';
        hiddenDiv3.style.display='none';
        hiddenDiv4.style.visibility='hidden';
        hiddenDiv4.style.display='none';
        hiddenDiv5.style.visibility='hidden';
        hiddenDiv5.style.display='none';
    }
}
function show1(select_item) {
    if (select_item == 1) {
        hiddenDiv1.style.visibility='visible';
        hiddenDiv1.style.display='block';
        lease_no.style.display='none';
        lease_no.style.visibility='hidden';
        
    } 
    else if(select_item == 0){
        hiddenDiv1.style.visibility='hidden';
        hiddenDiv1.style.display='none';
        lease_no.style.display='block'
        lease_no.style.visibility='visible';
    }
}
function show2(select_item) {
    if (select_item == 0) {
        hiddenDiv2.style.visibility='visible';
        hiddenDiv2.style.display='block';
        lease_no.style.display='none';
        lease_no.style.visibility='hidden';
    } 
    else if (select_item == 1){
        hiddenDiv2.style.visibility='hidden';
        hiddenDiv2.style.display='none';
        lease_no.style.display='block'
        lease_no.style.visibility='visible';
    }
}
function show3(select_item) {
    if (select_item == 1) {
        hiddenDiv3.style.visibility='visible';
        hiddenDiv3.style.display='block';
        lease_no.style.display='none';
        lease_no.style.visibility='hidden';
    } 
    else if(select_item == 0){
        hiddenDiv3.style.visibility='hidden';
        hiddenDiv3.style.display='none';
        lease_no.style.display='block'
        lease_no.style.visibility='visible';
    }
}
function show4(select_item) {
    if (select_item == 1) {
        hiddenDiv4.style.visibility='visible';
        hiddenDiv4.style.display='block';
        lease_no.style.display='none';
        lease_no.style.visibility='hidden';
    } 
    else{
        hiddenDiv4.style.visibility='hidden';
        hiddenDiv4.style.display='none';
        lease_no.style.display='block'
        lease_no.style.visibility='visible';
    }
}
function show5(select_item) {
    if (select_item == 1) {
        hiddenDiv4.style.visibility='visible';
        hiddenDiv4.style.display='block';
        lease_no.style.display='none';
        lease_no.style.visibility='hidden';
    } 
    else if(select_item == 0) {
        hiddenDiv5.style.visibility='hidden';
        hiddenDiv5.style.display='none';
        lease_no.style.display='block'
        lease_no.style.visibility='visible';
        lease_yes.style.visibility='hidden';
        lease_yes.style.display='none';
    }
    else if(select_item == 2) {
        hiddenDiv5.style.visibility='hidden';
        hiddenDiv5.style.display='none';
        lease_yes.style.display='block'
        lease_yes.style.visibility='visible';
        lease_no.style.visibility='hidden';
        lease_no.style.display='none';
    }
}
function show6(select_item) {
    if (select_item == 1) {
        hiddenDiv5.style.visibility='visible';
        hiddenDiv5.style.display='block';
    } 
    else if (select_item == 0){
        lease_yes.style.visibility='hidden';
        lease_yes.style.display='visible';
        hiddenDiv5.style.visibility='hidden';
        hiddenDiv5.style.display='none';
        lease_no.style.visibility='visible';
        lease_no.style.display='block';
    }
}
function show7(select_item) {
    if (select_item == 1) {
        lease_yes.style.visibility='visible';
        lease_yes.style.display='block';
        lease_no.style.visibility='hidden';
        lease_no.style.display='none';
    } 
    else if (select_item == 0){
        lease_no.style.visibility='visible';
        lease_no.style.display='block'
        lease_yes.style.visibility='hidden';
        lease_yes.style.display='none';
    }
}
function showpopup(select_item) {
    if (select_item == 1) {
        myModal.style.visibility='visible';
        myModal.style.display='block';
    } 
}
function closess(){
    myModal.style.display='none';
}
function showpopupq1() {
    question_popup1.style.visibility='visible';
    question_popup1.style.display='block';
}
function closes(){
    question_popup1.style.display='none';
}
function showpopupq2() {
    question_popup2.style.visibility='visible';
    question_popup2.style.display='block';
}
function showpopupq3() {
    question_popup3.style.visibility='visible';
    question_popup3.style.display='block';
}
function showpopupq4() {
    question_popup4.style.visibility='visible';
    question_popup4.style.display='block';
}
function showpopupq5() {
    question_popup5.style.visibility='visible';
    question_popup5.style.display='block';
}
function showpopupq6() {
    question_popup6.style.visibility='visible';
    question_popup6.style.display='block';
}
function showpopupq7() {
    question_popup7.style.visibility='visible';
    question_popup7.style.display='block';
}
function shownext(){
    $(".shownext1").toggle("slow");
}
function shownext1(){
    $(".shownextq5").toggle("slow");
}
function closes4(){
    question_popup4.style.display='none';
}
function closes1(){
    question_popup1.style.display='none';
}
function closes2(){
    question_popup2.style.display='none';
}
function closes3(){
    question_popup3.style.display='none';
}
function closes5(){
    question_popup5.style.display='none';
}
function closes6(){
    question_popup6.style.display='none';
}
function closes7(){
    question_popup7.style.display='none';
}
function journal_entry_dis(){
    $(".journal_display").togle("slow");
}

