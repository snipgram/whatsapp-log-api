import response from './../response.js'
import date from 'date-and-time';

const validate = async(req, res, next) => {
    try {
        const { start_date, end_date } = req.body

        // is valid date
        var is_valid_start_date = date.isValid(start_date, 'YYYY-MM-DD')
        var is_valid_end_date = date.isValid(end_date, 'YYYY-MM-DD')

        if(!is_valid_start_date || !is_valid_end_date) {
            return response(res, 422, false, 'date invalid!', {})
        }

        // start date must < end date
        var start_date_timestamp = (new Date(start_date)).getTime();
        var end_date_timestamp = (new Date(end_date)).getTime();

        if (start_date_timestamp > end_date_timestamp) {
            return response(res, 422, false, 'start date must be lower than end date!', {})
        }

        // range max 3 days
        var new_start_date = new Date(start_date)
        var new_end_date = new Date(end_date)
        var diff_days = date.subtract(new_end_date, new_start_date).toDays(); 
        if(diff_days > 3) {
            return response(res, 422, false, 'maximum of diff days is 3!', {})
        }

        next()

    } catch (err) {
        return response(res, 401, false, err.message, {})
    }
}

export default validate
