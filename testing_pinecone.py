import pinecone


def i():
    pinecone.init(api_key="0083880d-1da6-4a0b-9245-b2bca2a222d7",
                  environment="us-central1-gcp")


def createIndex(name):
    pinecone.create_index(name, dimension=8, metric="euclidean")


def printIndexes():
    return pinecone.list_indexes()


def upsert():
    index = pinecone.Index("quickstart")
    # Upsert sample data (5 8-dimensional vectors)
    index.upsert([
        ("A", [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]),
        ("B", [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]),
        ("C", [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]),
        ("D", [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]),
        ("E", [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5])
    ])


def get():
    index = pinecone.Index("quickstart")
    return index.query(
        vector=[0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
        top_k=3,
        include_values=True
    )


if __name__ == "__main__":
    i()
    print(printIndexes())
    print(get())
