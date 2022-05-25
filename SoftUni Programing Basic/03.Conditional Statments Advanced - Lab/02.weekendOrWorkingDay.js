function weekednOrWorkingDay(input) {
    const day = String (input[0]);

    switch (day) {
        case "Monday":
        case "Tuesday":
            case "Wednesday":
                case "Thursday":
                    case "Friday": console.log ("Working day"); break ;
                    case "Saturday":
                    case "Sunday": console.log ("Weekend"); break;
                    default : console.log ("Error")
    }
}

weekednOrWorkingDay(["Sundray"])

// Вход	Изход
// (["Monday"])	Working day

// Вход	Изход
// (["Sunday"])	Weekend
