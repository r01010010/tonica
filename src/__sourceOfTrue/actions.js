import Actors from './actors';
import Objects from './objects';

const { USER } = Actors;
const { WORKSPACE, TASK, TASK_LIST, COMMENT } = Objects;

export default {
  [`${USER}_CREATES_${WORKSPACE}`]: `${USER}_CREATES_${WORKSPACE}`,
  [`${USER}_DELETES_${TASK_LIST}`]: `${USER}_DELETES_${TASK_LIST}`,
}
