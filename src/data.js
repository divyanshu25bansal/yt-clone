export const API_KEY = 'AIzaSyD2bqSksu-IPQ3RRvCdmK17ArhznccPk0I'

export const value_convert = (value) => {
    
    if (value>=1000000){
        return Math.floor(value/1000000) + "M"
    }  
    else if (value >= 1000){
        return Math.floor(value/1000) + "K"
    }else{
        return value
    }
};

