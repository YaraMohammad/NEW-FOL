// جعل الكود يعمل بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
  // إضافة حدث عند الضغط على الزر
  const button = document.getElementById("myButton");
  if (button) {
      button.addEventListener("click", function() {
          Swal.fire('Button Clicked!');
      });
  }

  // إضافة الـ SweetAlert الخاص بالـ Confirmation
  Swal.fire({
      title: 'Are you sure?',
      text: 'You cannot back down',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'YES',
      cancelButtonText: 'NO'
  }).then((result) => {
      if (result.isConfirmed) {
          console.log('DELETE!');
      } else {
          console.log('CANCEL');
      }
  });
});