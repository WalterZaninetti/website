export default function ClassNamesFunction(...classes){
        return classes.filter(Boolean).join(" ");
}