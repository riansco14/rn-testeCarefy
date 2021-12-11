import { format,parseISO , compareAsc } from 'date-fns'

export function formatDateToString(date: Date) {
    try {
        return format(parseISO(new Date(date).toISOString()), 'dd/MM/yyyy')
    } catch (error) {
        console.log(error);
    }
    return ''
}