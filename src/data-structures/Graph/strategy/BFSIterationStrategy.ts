import IGraphIterationStrategy from "../IGraphIterationStrategy";
import IGraphIterator from "../IGraphIterator";
import IGraph from "../IGraph";
import GraphIteratorBFS from "../iterator/GraphIteratorBFS";

export default class BFSIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorBFS<V>(graph, startVertex);
  }
}
