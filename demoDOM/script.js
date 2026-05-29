// lấy phần tử từ HTML
const taskInput = document.getElementById("taskInput");  /* input để nhập công việc */
const addbtn = document.getElementById("addbtn");       /* nút thêm công việc */
const tasklist = document.getElementById("tasklist");   /* ul để chứa danh sách công việc */

// sự kiện khi nhấn nút thêm
addbtn.addEventListener("click", function () {

    // lấy dữ liệu người dùng nhập
    const taskText = taskInput.value;  /* lấy giá trị từ input */

    // kiểm tra rỗng
    if (taskText === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    // tạo thẻ li
    const li = document.createElement("li"); 

    // thêm nội dung vào li
    li.textContent = taskText;

    // tạo nút xóa
    const deletebtn = document.createElement("button");

    deletebtn.textContent = "Xóa";

    deletebtn.classList.add("deletebtn");  

    // thêm nút xóa vào li
    li.appendChild(deletebtn);   

    // thêm li vào ul
    tasklist.appendChild(li);

    // xóa input sau khi thêm
    taskInput.value = "";  

    // sự kiện xóa
    deletebtn.addEventListener("click", function () {
        li.remove(); 
    });
});