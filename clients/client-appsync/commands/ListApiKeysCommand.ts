import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { ListApiKeysRequest, ListApiKeysResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListApiKeysCommand,
  serializeAws_restJson1ListApiKeysCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListApiKeysCommandInput extends ListApiKeysRequest {}
export interface ListApiKeysCommandOutput extends ListApiKeysResponse, __MetadataBearer {}

/**
 * <p>Lists the API keys for a given API.</p>
 *          <note>
 *             <p>API keys are deleted automatically 60 days after they expire. However, they may
 *             still be included in the response until they have actually been deleted. You can safely
 *             call <code>DeleteApiKey</code> to manually delete a key before it's automatically
 *             deleted.</p>
 *          </note>
 */
export class ListApiKeysCommand extends $Command<
  ListApiKeysCommandInput,
  ListApiKeysCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListApiKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApiKeysCommandInput, ListApiKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "ListApiKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListApiKeysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListApiKeysResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListApiKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListApiKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListApiKeysCommandOutput> {
    return deserializeAws_restJson1ListApiKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
