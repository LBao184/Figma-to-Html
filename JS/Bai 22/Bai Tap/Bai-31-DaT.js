// Bài tập JS 31: Viết chương trình có tên TimeSince ,thống báo người dùng x phút
// Ví dụ 2 người đang chat với nhau, người A offline và người B muốn biết người A đã offline được bao lâu, khi đó người B sẽ nhập vào số phút và chương trình sẽ trả về thông báo "Người A đã offline được x phút"
function timeSince(timestamp) {
    let now = new Date();
    console.log("Thời gian hiện tại: " + now.getTime());
    let timeDifference = now - timestamp;
    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30);
    let years = Math.floor(months / 12);

    if (years > 0) {
        return `Người A đã offline được ${years} năm`;
    } else if (months > 0) {
        return `Người A đã offline được ${months} tháng`;
    } else if (days > 0) {
        return `Người A đã offline được ${days} ngày`;
    } else if (hours > 0) {
        return `Người A đã offline được ${hours} giờ`;
    } else if (minutes > 0) {
        return `Người A đã offline được ${minutes} phút`;
    } else {
        return `Người A đã offline được ${seconds} giây`;
    }
}
    let timeOffline = prompt("Nhập vào số phút người A đã offline:");
    console.log(`Người A đã offline được ${timeOffline} phút`);
