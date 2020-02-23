let tab;
tab = "<table >";
for (i=2;i<=9;i++) {
    tab += "<tr>";
    for (j=1;j<=9;j++) {
        tab += "<td>" +i+"x"+j+"=" +i*j+"</td>";
    }
    tab+="</tr>";
}
tab+="</table>";
document.write(tab);