class Constants {

    public static get ServerAddress(): string {
        return "http://localhost";
    }

}

class SomeOtherClass {

}

function SomeFunctionIWantToExport() {

}

export default Constants;
export {Constants}
export {SomeOtherClass as OtherClass};
export {SomeFunctionIWantToExport}