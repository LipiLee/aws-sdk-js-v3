import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StartDBClusterMessage, StartDBClusterResult } from "../models/models_1";
import {
  deserializeAws_queryStartDBClusterCommand,
  serializeAws_queryStartDBClusterCommand,
} from "../protocols/Aws_query";
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

export interface StartDBClusterCommandInput extends StartDBClusterMessage {}
export interface StartDBClusterCommandOutput extends StartDBClusterResult, __MetadataBearer {}

/**
 * <p>Starts an Amazon Aurora DB cluster that was stopped using the AWS console, the stop-db-cluster
 *        AWS CLI command, or the StopDBCluster action.</p>
 *
 *          <p>For more information, see
 *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html">
 *                Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 */
export class StartDBClusterCommand extends $Command<
  StartDBClusterCommandInput,
  StartDBClusterCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDBClusterCommandInput, StartDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StartDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDBClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: StartDBClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStartDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDBClusterCommandOutput> {
    return deserializeAws_queryStartDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
