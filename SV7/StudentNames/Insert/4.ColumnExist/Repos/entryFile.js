import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnEmail,LocalCoumnCollegeName,LocalCoumnCountry,LocalCoumnEntranceRank,LocalCoumnYearPassOut,LocalCoumnBack_logs,LocalCoumnRollNumber,LocalCoumnfile,LocalCoumnGitLink,LocalCoumnIntern2025}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnEmail,LocalCoumnCollegeName,LocalCoumnCountry,LocalCoumnEntranceRank,LocalCoumnYearPassOut,LocalCoumnBack_logs,LocalCoumnRollNumber,LocalCoumnfile,LocalCoumnGitLink,LocalCoumnIntern2025});

    return LocalFromDal;
};

export {
    postDefaultFunc
};