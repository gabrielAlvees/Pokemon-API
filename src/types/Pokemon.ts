export interface IPokemon {
  url: string;
  id: string;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          }
        }
      }
      "generation-vii": {
        "ultra-sun-ultra-moon": {
          front_default: string;
        }
      }
    }
  }
}