const StudentId = [
    {
        Name: "Oskar",
        IDnum: 101010,
        Year: 2020,
        Grade: 75,
    },
    {
        Name: "Arlan",
        IDnum: 101011,
        Year: 2020,
        Grade: 95,
    },
    {
        Name: "Wiggy",
        IDnum: 101012,
        Year: 2020,
        Grade: 82,
    },
    {
        Name: "Nelson",
        IDnum: 101013,
        Year: 2020,
        Grade: 92,
    },
    {
        Name: "Bulantoy",
        IDnum: 101014,
        Year: 2020,
        Grade: 89,
    },
    {
        Name: "Gaspar",
        IDnum: 101015,
        Year: 2020,
        Grade: 83,
    },
    {
        Name: "Tateng",
        IDnum: 101016,
        Year: 2020,
        Grade: 90,
    },
    {
        Name: "Jepax",
        IDnum: 101017,
        Year: 2020,
        Grade: 91,
    },
    {
        Name: "Kenshin",
        IDnum: 101018,
        Year: 2020,
        Grade: 90,
    },
    {
        Name: "BossOk",
        IDnum: 101019,
        Year: 2020,
        Grade: 82,
    },
];

function findHighLow(student){
    let high = student[0];
    let low = student[0];
    for(let i = 1; i < 10; i++){
        if(student[i].Grade > high.Grade){
            high = student[i];
        }
        if(student[i].Grade < low.Grade){
            low = student[i];
        }
    }
    console.log("Highest: ");
    console.log(high);
    console.log("Lowest: ");
    console.log(low);
}
findHighLow(StudentId);
