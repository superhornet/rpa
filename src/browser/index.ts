
(() => {
    interface Locomotive {
        id: number;
        designation: string;
        type: string;
    }
    interface RailLine {
        id: number;
        lineName: string;
        active: boolean;
    }
    const locomotives: Record<number, Locomotive> = {
        0: { id: 0, designation: "VO-1000", type: "switcher" },
        1: { id: 1, designation: "SW-1200", type: "switcher" },
        2: { id: 2, designation: "SW-1500", type: "switcher" },
        3: { id: 3, designation: "RS-3", type: "road" },
        4: { id: 4, designation: "PA-1", type: "passenger" },
        5: { id: 5, designation: "RF-16", type: "passenger" },
        6: { id: 6, designation: "GP35", type: "road" },
        7: { id: 7, designation: "GP38", type: "road" },
        8: { id: 8, designation: "GP38-2", type: "road" },
        9: { id: 9, designation: "GP39-2", type: "road" },
        10: { id: 10, designation: "GP40-2", type: "road" },
        11: { id: 11, designation: "SD40-2", type: "road" },
        12: { id: 12, designation: "U25B", type: "road" },
        13: { id: 13, designation: "U26C", type: "road" },
        14: { id: 14, designation: "GE Dash-7", type: "road" },
        15: { id: 15, designation: "GE Dash-8", type: "road" },
        16: { id: 16, designation: "GE Dash-9", type: "road" },
        17: { id: 17, designation: "EMD SD70ACE", type: "road" },
        18: { id: 18, designation: "EMD SD70MAC", type: "road" },
        19: { id: 19, designation: "EMD SD80MAC", type: "road" },
        20: { id: 20, designation: "EMD SD90MAC", type: "road" },
        21: { id: 21, designation: "GE AC6000", type: "road" },
        22: { id: 22, designation: "GE AC4400CW", type: "road" },
        23: { id: 23, designation: "GE ES44AC", type: "road" },
    }
    const railroads: Record<number, RailLine> = {
        0: { id: 0, lineName: "Amtrak", active: true},
        1: { id: 1, lineName: "Missouri Pacific Railroad", active: false },
        2: { id: 2, lineName: "Missouri, Kansas, & Texas Railway", active: false },
        3: { id: 3, lineName: "Kansas City Southern Railroad", active: false },
        4: { id: 4, lineName: "Denver & Rio Grande Railroad", active: false },
        5: { id: 5, lineName: "Southern Pacific Railway", active: false },
        6: { id: 6, lineName: "Union Pacific Railroad", active: true },
        7: { id: 7, lineName: "Atchinson Topeka & Santa Fe Railway", active: false },
        8: { id: 8, lineName: "Western Pacific Railroad", active: false },
        9: { id: 9, lineName: "Spokane, Portland & Seattle Railway", active: false },
        10: { id: 10, lineName: "Great Western Railroad", active: false },
        11: { id: 11, lineName: "Chicago, Burlington, & Quincy RR", active: true },
        12: { id: 12, lineName: "Great Northern Railway", active: true },
        13: { id: 13, lineName: "Burlington Northern Railroad", active: true },
        14: { id: 14, lineName: "Milwaukee Road", active: true },
        15: { id: 15, lineName: "Canadian National Railway", active: true },
        16: { id: 16, lineName: "Canadian Pacific Railway", active: true },
        17: { id: 17, lineName: "Grand Trunk Western Railway", active: true },
        18: { id: 18, lineName: "Erie & Lackawana Railway", active: true },
        19: { id: 19, lineName: "Boston & Maine Railroad", active: true },
        20: { id: 20, lineName: "Pan-Am Railways", active: true },
        21: { id: 21, lineName: "New Haven Railroad", active: true },
        22: { id: 22, lineName: "Delaware & Hudson Railway", active: true },
        23: { id: 23, lineName: "Chesapeake & Ohio Railway", active: true },
        24: { id: 24, lineName: "Baltimore & Ohio Railroad", active: true },
        25: { id: 25, lineName: "Pennsylvania Railroad", active: true },
        26: { id: 26, lineName: "Penn Central Railroad", active: true },
        27: { id: 27, lineName: "New York Central Railroad", active: true },
        28: { id: 28, lineName: "Conrail Railroad", active: true },
        29: { id: 29, lineName: "CSX Railroad", active: true },
        30: { id: 30, lineName: "Florida East Coast Railway", active: true },
    };
    console.log("Welcome to the railroads.");
    const railroadsLength: number = Object.keys(railroads).length;
    const locomotivesLength: number = Object.keys(locomotives).length;
    let textarea = '';
    const textareaElement = document.getElementById('output') as HTMLTextAreaElement;
    const railroadStartBtn = document.getElementById('railroad');
    const locoStartBtn = document.getElementById('locomotive');
    if(railroadStartBtn){
        railroadStartBtn.onclick = startRailroads;
    }

    if(locoStartBtn){
        locoStartBtn.onclick = startLocomotives;
    }
    function startLocomotives() {
        textarea = "";
        textareaElement.style.backgroundColor = 'darkblue';
        Object.values(locomotives).forEach((loco) => {
            setTimeout(() => {
                textarea += `${loco.designation}\r\n`;
                textareaElement.value = textarea;
                // const searchWin = open(`https://www.bing.com/search?q=${encodeURIComponent(loco.designation)}`, 'searchTab');
                // setInterval(() => {
                //     searchWin?.location.reload()
                // }, 5000);
                if (loco.id === locomotivesLength-1) {
                    textareaElement.style.backgroundColor = 'darkgreen';
                }
            }, loco.id * 1000);
        });

    }
    function startRailroads() {
        const newTab = window.open(`http://localhost:3000/search?query=`, 'searchTab');
    
        textarea = "";
        textareaElement.style.backgroundColor = 'darkblue';
        Object.values(railroads).forEach((line) => {
            console.log(encodeURIComponent(line.lineName));
            setTimeout(() => {
                textarea += `${line.lineName} ${line.id} ${railroadsLength}\r\n`;
                textareaElement.value = textarea;

                newTab?.history.pushState({ search: line.lineName }, line.lineName, `http://localhost:3000/search?query=${encodeURIComponent(line.lineName)}`);
                newTab?.navigation.reload();
                if (line.id === railroadsLength-1) {
                    textareaElement.style.backgroundColor = 'darkgreen';
                }
            }, line.id * 1000 * 5);
        });
    }
})();