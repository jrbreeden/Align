export default function optimizeResume(jobKeywordList, resume, spaceConstraints = 1) {
  console.log('my resume is , ' ,resume)
  const { personal, statement, skills, projects, workHistory, education } = resume
  const sectionList = [projects, workHistory]

  const maxLinesSpace = 61 * spaceConstraints * 11
  let currentSpace = 0
  let output = {
    personal: personal,
    statement: statement,
  }
  //rough esimation for personal section and statement section sizes. Est 115 chars/line at 11pt .5marg
  currentSpace += (28 + 11 + 11 + 7 + 2)
  console.log('i have tags ' , jobKeywordList)
  currentSpace += (12 + (11 * Math.ceil(statement.body.length / 100)) + 7)
  console.log('started with space ', maxLinesSpace)
  console.log('my remaining space is after initial sections is ', maxLinesSpace - currentSpace)
  //console.log('my skills are ' , skills)
  const createSkills = (max) => {
    let skillScoreList = []

    for (let skill of skills) {
      let score = 0
      if(skill.priority === 2){
        score += 10
      }else if(skill.priority === 1){
        score += 1
      }
      skill.tags.forEach(tag => jobKeywordList.includes(tag) ? score += 2 : null)

      skillScoreList.push([score, skill])
    }

    skillScoreList.sort(function (a, b) {
      return b[0] - a[0]
    })
    console.log('my skill score list is ' , skillScoreList)

    currentSpace += 12 + 7 + 11 * Math.ceil(skillScoreList.slice(0, max).map((line) => line[1].skill).join(' | ').length / 100)
    if (skillScoreList.length > max) {
      return skillScoreList.slice(0, max).map((skill) => skill[1])
    } else {
      return skillScoreList.map((skill) => skill[1])
    }
  }

  const createEducation = () => {
    currentSpace += 12
    //console.log('ed subsects', education.subSections)
    education.subSections.forEach((sub) => {
      currentSpace += 12
      sub.lineItems.forEach((bullet) => {
        currentSpace += 11 * Math.ceil(bullet.body.length / 100)
      })
    })
    return education
  }

  const createSections = (sectArr) => {
    currentSpace += sectArr.length * 12

    let sectSubScoresList = []

    sectArr.forEach((sect) => {

      sect.subSections.forEach((subSect) => {

        subSect.score += subSect.cond.priority === 2 ? 100 : subSect.cond.priority === 1 ? 3 : 0
        subSect.lineItems.forEach((line) => {
          line.score += line.priority === 2 ? 100 : line.priority === 1 ? 3 : 0
          line.tags.forEach((tag) => {

            if (jobKeywordList.includes(tag)) {
              line.score++
              subSect.score++
            }
          })
        })
        sectSubScoresList.push([subSect.score, subSect])
      })
    })

    sectSubScoresList.sort(function (a, b) {
      return b[0] - a[0]
    })
    console.log('my sectSub scores list', sectSubScoresList)

    //each subsection to include will take 12+11*(lines) =approx 45 for 3 line subsect

    //console.log(maxSects)

    let inclusionList = []
    //process all the subsections until all space is filled.
    //.filter(sect => sect[0]>99)
    for (let sect of sectSubScoresList) {
      currentSpace += 12
      console.log('my sect is ' , sect)
      let subSect = sect[1]

      subSect.lineItems.sort(function (a, b) {
        return b.score - a.score
      })

      let pSubSect = { ...subSect, lineItems: [] }
      console.log('initial psub is ', pSubSect)
      let i = 0

      while (i < subSect.lineItems.length && (subSect.lineItems[i].score > 0 || i < 5) && pSubSect.lineItems.length < 4 && (maxLinesSpace - currentSpace) > 26) {
        console.log('lineItem i', subSect.lineItems[i])
        pSubSect.lineItems.push(subSect.lineItems[i])
        currentSpace += (11 * Math.ceil(subSect.lineItems[i].body.length / 100))
        i++
      }
      console.log('this subsect,  p subsect is ', subSect, pSubSect)

      inclusionList.push(pSubSect)
      currentSpace += 7
      console.log('curr space is ', currentSpace)
      if ((maxLinesSpace - currentSpace) < 60) {
        console.log('out of space!')
        break
      }
    }

    console.log('inclusion list is ', inclusionList)

    let outputArr = []

    for (let sect of sectArr) {
      let sectReconst = { ...sect, subSections: [] }
      let sectContents = sect.subSections.map((subsect) => subsect.subHeader)
      for (let optimizedSubSect of inclusionList) {
        if(sectContents.includes(optimizedSubSect.subHeader)){
          sectReconst.subSections.push(optimizedSubSect)
        }
      }
      outputArr.push(sectReconst)
    }
    console.log('optimized section output is ', outputArr)
    return outputArr
  }
  //end of create sections function

  output.skills = createSkills(15)
  output.education = createEducation()
  console.log('r space after skills and education', maxLinesSpace - currentSpace)
  let optimalSections = createSections(sectionList)

  //this is a bandaid
    output.projects = optimalSections[0]
    output.workHistory = optimalSections[1]

  console.log('Total output is ', output)
  return output
}

////////////////////////////////////////////////////////////////////////////////////